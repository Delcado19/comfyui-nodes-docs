
# Documentation
- Class name: MotionDiffSimpleSampler
- Category: MotionDiff
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MotionDiffSimpleSampler node simplifies the sampling process in motion diffusion frameworks, specifically targeting generation or transformation of motion data. It abstracts the complexity of selecting and applying different sampling strategies (such as uniform sampling or loss-aware sampling) to generate or modify motion sequences based on given conditions and inputs.

# Input types
## Required
- sampler_name
    - Specifies the name of the sampling strategy to use, affecting the algorithm selection for generating or transforming motion data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- md_model
    - A wrapper for the motion diffusion model, providing the necessary interface for the sampling process.
    - Comfy dtype: MD_MODEL
    - Python dtype: MotionDiffModelWrapper
- md_clip
    - Represents clip information required for motion generation or transformation, encapsulating the model and its associated data.
    - Comfy dtype: MD_CLIP
    - Python dtype: MotionDiffCLIPWrapper
- md_cond
    - Conditions for motion data generation or transformation, guiding the sampling process. This includes text and motion data processed by the MotionCLIPTextEncode node.
    - Comfy dtype: MD_CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- motion_data
    - The input motion data to be transformed or regenerated, depending on the sampling strategy. Includes motion, motion mask, and motion length.
    - Comfy dtype: MOTION_DATA
    - Python dtype: Dict[str, torch.Tensor]
- seed
    - A seed value ensuring reproducibility of the generated or transformed motion data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- motion_data
    - The output motion data after sampling, including the generated or transformed motion sequence, motion mask, and motion length.
    - Comfy dtype: MOTION_DATA
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MotionDiffSimpleSampler:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "sampler_name": (["ddpm", "ddim"], {"default": "ddim"}),
                "md_model": ("MD_MODEL", ),
                "md_clip": ("MD_CLIP", ),
                "md_cond": ("MD_CONDITIONING", ),
                "motion_data": ("MOTION_DATA",),
                "seed": ("INT", {"default": 123,"min": 0, "max": 0xffffffffffffffff, "step": 1}),
            }
        }

    RETURN_TYPES = ("MOTION_DATA",)
    CATEGORY = "MotionDiff"
    FUNCTION = "sample"

    def sample(self, sampler_name, md_model: MotionDiffModelWrapper, md_clip, md_cond, motion_data, seed):
        md_model.to(get_torch_device())
        md_clip.to(get_torch_device())
        for key in motion_data:
            motion_data[key] = to_gpu(motion_data[key])

        kwargs = {
            **motion_data,
            'inference_kwargs': {},
            'sampler': sampler_name,
            'seed': seed
        }

        with torch.no_grad():
            output = md_model(md_clip.model, cond_dict=md_cond, **kwargs)[0]['pred_motion']
            pred_motion = output * md_model.dataset.std + md_model.dataset.mean
            pred_motion = pred_motion.cpu().detach()
        
        md_model.cpu(), md_clip.cpu()
        for key in motion_data:
            motion_data[key] = to_cpu(motion_data[key])
        return ({
            'motion': pred_motion,
            'motion_mask': motion_data['motion_mask'],
            'motion_length': motion_data['motion_length'],
        }, )

```
