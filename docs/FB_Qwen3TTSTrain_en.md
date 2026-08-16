# Documentation
- Class name: FB_Qwen3TTSTrain
- Category: Qwen3TTS
- Output node: True
- Repo Ref: https://github.com/flybirdxx/ComfyUI-Qwen-TTS

ComfyUI custom nodes for speech synthesis, voice cloning, and voice design based on Qwen3-TTS

# Input types
## Required
- init_model
    - The init_model input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tokenizer
    - The tokenizer input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- audio_folder
    - The audio_folder input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- output_dir
    - The output_dir input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- speaker_name
    - The speaker_name input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- test_text
    - The test_text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- language
    - The language input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- learning_rate
    - The learning_rate input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_epochs
    - The num_epochs input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- gradient_accumulation_steps
    - The gradient_accumulation_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- validate_every
    - The validate_every input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- checkpoint_path
    - The checkpoint_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/flybirdxx/ComfyUI-Qwen-TTS)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
