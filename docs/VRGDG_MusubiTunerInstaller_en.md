# Documentation
- Class name: VRGDG_MusubiTunerInstaller
- Category: VRGDG/Training
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

Provides buttons for installing Musubi-Tuner, downloading the selected model family, or doing both.

# Input types
## Required
- target_root
    - Point this to the Musubi root folder location where Musubi-Tuner should be installed or already exists, not to an arbitrary file path. The node will create Musubi-tuner here, or VRGDG_Musubi-tuner if that name already exists.
    - Comfy dtype: STRING
    - Python dtype: str
- model_family
    - Select which model family the model-download buttons should fetch.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- install_root
    - Resolved install folder written by the installer button.
    - Comfy dtype: STRING
    - Python dtype: str
- checkpoint_path
    - Downloaded checkpoint path written by the installer button.
    - Comfy dtype: STRING
    - Python dtype: str
- assets_root_out
    - Downloaded model assets folder written by the installer button.
    - Comfy dtype: STRING
    - Python dtype: str
- report_path
    - Verification report path written by the installer button.
    - Comfy dtype: STRING
    - Python dtype: str
- status_text
    - Status text written by the installer button.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- install_root
    - The install_root output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- status
    - The status output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- checkpoint_path
    - The checkpoint_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- assets_root
    - The assets_root output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- report_path
    - The report_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
