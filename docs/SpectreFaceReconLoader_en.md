
# Documentation
- Class name: SpectreFaceReconLoader
- Category: MotionDiff
- Output node: False

The SpectreFaceReconLoader node is designed to initialize and load the Spectre model along with a face tracker for face recognition tasks. It prepares the model for subsequent operations by downloading the necessary models and setting configuration parameters, ensuring the system is ready to perform face tracking and recognition on images or video streams.

# Input types
## Required
- fp16
    - Determines whether to load the model in half-precision (FP16) format. This can reduce memory usage and potentially improve performance on compatible hardware.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- spectre_model
    - Returns a tuple containing the initialized face tracker and Spectre model, ready for use in face recognition tasks.
    - Comfy dtype: SPECTRE_MODEL
    - Python dtype: Tuple[FaceTracker, SPECTRE]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SpectreFaceReconLoader:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"fp16": ("BOOLEAN", {"default": False})}
        }

    RETURN_TYPES = ("SPECTRE_MODEL", )
    FUNCTION = "load"
    CATEGORY = "MotionDiff"

    def load(self, fp16):
        face_tracker = FaceTracker(get_torch_device())
        download_models({"spectre_model.tar": "https://github.com/Fannovel16/ComfyUI-MotionDiff/releases/download/latest/spectre_model.tar"})
        spectre_cfg.pretrained_modelpath = str(CKPT_DIR_PATH / "spectre_model.tar")
        spectre_cfg.model.use_tex = False
        spectre = SPECTRE(spectre_cfg, get_torch_device())
        spectre.eval()
        return ((face_tracker, spectre), )

```
