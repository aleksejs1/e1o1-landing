import argparse
import asyncio
import os
import sys
import subprocess
from pathlib import Path
import edge_tts

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

REPO_ROOT = Path(__file__).resolve().parent.parent
VIDEOS_DIR = REPO_ROOT / "static" / "videos"
INPUT_VIDEO = VIDEOS_DIR / "encrypted1on1-demo.webm"
FFMPEG = r"C:\Program Files\kdenlive\bin\ffmpeg.exe"
FFPROBE = r"C:\Program Files\kdenlive\bin\ffprobe.exe"

CONFIG = {
    "en": {
        "voice": "en-US-AndrewNeural",
        "rate": "+10%",
        "mp4": VIDEOS_DIR / "encrypted1on1-demo-en.mp4",
        "webm": VIDEOS_DIR / "encrypted1on1-demo-en.webm",
        "temp_dir": REPO_ROOT / ".temp-audio-en",
        "combined_audio": REPO_ROOT / ".temp-combined-en.wav",
        "scripts": [
            (1000, "encrypted1on1 is a self-hosted platform for private one-on-ones. Encryption keys are derived in your browser and never leave your device."),
            (12000, "Your cadence is organized into clear cycles, keeping upcoming syncs and complete past history in one place."),
            (20500, "Three minutes of async prep ahead of time: log mood, pulse, and blockers. No blank sheets, no surprise status interrogations."),
            (31000, "Private scratchpad notes are encrypted only for you. Even your manager cannot read them."),
            (40000, "The server and database only ever receive opaque ciphertext. Provable zero-knowledge security."),
            (49800, "Agreed goals, feedback, and action items automatically roll over into the next cycle."),
            (57800, "When review season arrives, months of accomplishments compile into a report in one click."),
            (66200, "Open source, free forever, and self-hosted with a single Docker command. Total privacy, guaranteed.")
        ]
    },
    "ru": {
        "voice": "ru-RU-DmitryNeural",
        "rate": "+10%",
        "mp4": VIDEOS_DIR / "encrypted1on1-demo-ru.mp4",
        "webm": VIDEOS_DIR / "encrypted1on1-demo-ru.webm",
        "temp_dir": REPO_ROOT / ".temp-audio-ru",
        "combined_audio": REPO_ROOT / ".temp-combined-ru.wav",
        "scripts": [
            (1000, "encrypted1on1 — платформа для конфиденциальных один на один встреч. Ключи создаются в браузере и никогда не покидают устройство."),
            (12000, "Встречи разбиты на четкие циклы: активные обсуждения и полный архив прошлых разговоров."),
            (20500, "Асинхронная подготовка за три минуты: настроение, пульс и блокеры. Никаких пустых листов и неловких допросов."),
            (31000, "Личные заметки шифруются только для вас. Их не увидит даже ваш руководитель."),
            (40000, "Сервер и база данных видят только зашифрованные данные. Настоящий Zero-Knowledge."),
            (49800, "Согласованные цели и контекст автоматически переходят в следующий период."),
            (57800, "Отчет для performance review формируется в один клик прямо в памяти браузера."),
            (66200, "Open-source, без оплаты за пользователей и селф-хостинг в один Docker-контейнер. Попробуйте прямо сейчас.")
        ]
    }
}

async def generate_speech_segments(cfg, force_regenerate=True):
    temp_dir = cfg["temp_dir"]
    voice = cfg["voice"]
    rate = cfg["rate"]
    scripts = cfg["scripts"]
    
    temp_dir.mkdir(parents=True, exist_ok=True)
    print(f"Generating speech segments with {voice} at {rate}...")
    
    for i, (offset_ms, text) in enumerate(scripts):
        out_file = temp_dir / f"seg_{i:02d}.mp3"
        if force_regenerate and out_file.exists():
            out_file.unlink()
        
        success = False
        for attempt in range(4):
            try:
                await asyncio.sleep(0.6)
                communicate = edge_tts.Communicate(text, voice, rate=rate)
                await communicate.save(str(out_file))
                if out_file.exists() and out_file.stat().st_size > 1000:
                    # check duration with ffprobe
                    res = subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(out_file)], capture_output=True, text=True)
                    dur = float(res.stdout.strip())
                    print(f"  Segment {i}: offset={offset_ms/1000:.1f}s, duration={dur:.2f}s, ends at={(offset_ms/1000 + dur):.2f}s")
                    success = True
                    break
            except Exception as e:
                print(f"  Attempt {attempt+1} failed for segment {i}: {e}")
                await asyncio.sleep(1.5)
        
        if not success:
            raise RuntimeError(f"Could not generate speech for segment {i}")

def mix_audio_and_video(cfg):
    temp_dir = cfg["temp_dir"]
    scripts = cfg["scripts"]
    combined_audio = cfg["combined_audio"]
    out_mp4 = cfg["mp4"]
    out_webm = cfg["webm"]
    
    # 1. Get input video duration
    res = subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(INPUT_VIDEO)], capture_output=True, text=True)
    video_duration = float(res.stdout.strip())
    print(f"Master video duration: {video_duration:.2f}s")

    print("Mixing audio segments onto timeline...")
    inputs = []
    filter_parts = []
    for i, (offset_ms, _) in enumerate(scripts):
        seg_file = temp_dir / f"seg_{i:02d}.mp3"
        inputs.extend(["-i", str(seg_file)])
        filter_parts.append(f"[{i}:a]adelay={offset_ms}|{offset_ms}[a{i}];")
    
    mix_inputs = "".join(f"[a{i}]" for i in range(len(scripts)))
    # Mix with volume normalization and pad audio to video length
    filter_complex = (
        f"{''.join(filter_parts)}"
        f"{mix_inputs}amix=inputs={len(scripts)}:dropout_transition=0:normalize=0[amixed];"
        f"[amixed]apad=whole_dur={video_duration:.2f}[aout]"
    )
    
    cmd_audio = [
        FFMPEG, "-y",
        *inputs,
        "-filter_complex", filter_complex,
        "-map", "[aout]",
        "-t", f"{video_duration:.2f}",
        str(combined_audio)
    ]
    subprocess.run(cmd_audio, check=True)

    # 2. Output MP4 (H.264 + AAC)
    print(f"Muxing MP4 -> {out_mp4.name}...")
    cmd_mp4 = [
        FFMPEG, "-y",
        "-i", str(INPUT_VIDEO),
        "-i", str(combined_audio),
        "-c:v", "libx264",
        "-crf", "20",
        "-preset", "fast",
        "-c:a", "aac",
        "-b:a", "192k",
        "-t", f"{video_duration:.2f}",
        str(out_mp4)
    ]
    subprocess.run(cmd_mp4, check=True)

    # 3. Output WebM (VP8/copy + Opus)
    print(f"Muxing WebM -> {out_webm.name}...")
    cmd_webm = [
        FFMPEG, "-y",
        "-i", str(INPUT_VIDEO),
        "-i", str(combined_audio),
        "-c:v", "copy",
        "-c:a", "libopus",
        "-b:a", "128k",
        "-t", f"{video_duration:.2f}",
        str(out_webm)
    ]
    subprocess.run(cmd_webm, check=True)

    try:
        if combined_audio.exists():
            combined_audio.unlink()
    except Exception:
        pass

    # Verify output durations
    for out_file in [out_mp4, out_webm]:
        res = subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(out_file)], capture_output=True, text=True)
        dur = float(res.stdout.strip())
        size_mb = out_file.stat().st_size / (1024 * 1024)
        print(f"  ✓ {out_file.name}: {dur:.2f}s, {size_mb:.2f} MB")

async def process_language(lang):
    if lang not in CONFIG:
        raise ValueError(f"Unknown language: {lang}. Choose 'en' or 'ru'.")
    cfg = CONFIG[lang]
    print(f"\n=======================================================")
    print(f"Processing Voiceover: {lang.upper()}")
    print(f"=======================================================")
    await generate_speech_segments(cfg, force_regenerate=True)
    mix_audio_and_video(cfg)

async def main():
    parser = argparse.ArgumentParser(description="Dub encrypted1on1 promo video with synced TTS")
    parser.add_argument("--lang", choices=["all", "en", "ru"], default="all", help="Language to dub (default: all)")
    args = parser.parse_args()

    if not INPUT_VIDEO.exists():
        print(f"Error: Master video not found at {INPUT_VIDEO}")
        print("Run 'npm run make:video' first to generate the silent video.")
        sys.exit(1)

    if args.lang == "all":
        await process_language("en")
        await process_language("ru")
    else:
        await process_language(args.lang)

    print("\n🎉 Promo video dubbing complete!")

if __name__ == "__main__":
    asyncio.run(main())
