# Documentation
- Class name: VRGDG_VoxCPM2Generate
- Category: VRGDG/Audio
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG VoxCPM2 Voice Clone / TTS is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- text
    - What you want the model to say.
For cloning modes, this is the new target speech, not the transcript of your reference clip.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - Choose how VoxCPM2 should speak:
- text_to_speech: regular TTS with no voice reference.
- voice_design: zero-shot styled speech guided by your wording alone.
- prompt_continuation: continue from a prompt clip using prompt_audio plus prompt_text.
- controllable_clone: easiest voice clone. Provide a clean reference clip.
- ultimate_clone: strongest cloning mode. Provide a reference clip and the exact transcript in prompt_text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - auto picks CUDA when available and falls back to CPU.
CUDA is strongly recommended for VoxCPM2.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cfg_value
    - Classifier-free guidance strength.
A good starting point is 2.0. Lower can sound looser; higher can sound more forced.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inference_timesteps
    - Number of inference steps.
10 is a solid default. Higher may improve quality slightly but is slower.
    - Comfy dtype: INT
    - Python dtype: int
- load_denoiser
    - Optional cleanup for noisy prompt or reference audio before cloning.
Useful if your source clip has hiss, room noise, or light background noise.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- normalize_text
    - Normalize text before generation.
Can help with number/date expansion and cleaner pronunciation on some inputs.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- retry_badcase
    - Retry obviously bad generations automatically.
This can improve reliability but may take longer.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- retry_badcase_max_times
    - Maximum retry attempts when retry_badcase is enabled.
    - Comfy dtype: INT
    - Python dtype: int
- retry_badcase_ratio_threshold
    - Bad-case threshold for retry logic.
Leave this alone unless you are tuning generation behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_len
    - Minimum generated audio token length.
Usually safe to leave at the default.
    - Comfy dtype: INT
    - Python dtype: int
- max_len
    - Maximum generated token length.
Increase if long text is getting cut off. Higher values can use more VRAM and time.
    - Comfy dtype: INT
    - Python dtype: int
- save_filename_prefix
    - Base name for the saved WAV file in ComfyUI/output/VRGDG_AudioFiles.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- reference_audio
    - Speaker reference for voice cloning.
Use a clean single-speaker clip, ideally 10 to 30 seconds.
    - Comfy dtype: AUDIO
    - Python dtype: object
- reference_audio_path
    - Speaker reference for voice cloning.
Use a clean single-speaker clip, ideally 10 to 30 seconds.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_audio
    - Prompt/continuation audio.
Use this for prompt_continuation, or for ultimate_clone when you want the model to match a specific spoken example.
    - Comfy dtype: AUDIO
    - Python dtype: object
- prompt_audio_path
    - Prompt/continuation audio.
Use this for prompt_continuation, or for ultimate_clone when you want the model to match a specific spoken example.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_text
    - Exact transcript of the prompt/reference clip.
Required for prompt_continuation and ultimate_clone. Match the spoken words as closely as possible.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- saved_audio_path
    - The saved_audio_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- sample_rate
    - The sample_rate output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- status
    - The status output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
