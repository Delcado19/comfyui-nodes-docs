
# Documentation
- Class name: mgpt_t2m
- Category: MotionDiff/mGPT
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The mgpt_t2m node uses the MotionGPT model to convert text descriptions into motion data sequences, realizing the function of generating motion sequences based on natural language input. This text-to-motion conversion provides an innovative approach for creative expression and animation production.

# Input types
## Required
- mgpt_model
    - The MotionGPT model is the core component of this node, used to generate motion sequences from text. It is responsible for parsing the text input and producing corresponding motion data, which is crucial for the entire conversion process.
    - Comfy dtype: MGPTMODEL
    - Python dtype: torch.nn.Module
- motion_length
    - Specifies the desired length of the generated motion sequence. This parameter affects the granularity and overall range of motion details, allowing users to control the time span of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed value for random number generation, ensuring reproducibility of the generated motion sequence under the same input. This is important for the consistency of experiments and the verifiability of results.
    - Comfy dtype: INT
    - Python dtype: int
- text
    - Text description as creative input, guiding the generation process of the motion sequence. It serves as a bridge converting language concepts into visual actions, reflecting the user's creative intent.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- motion_data
    - The output motion_data is the motion data sequence generated based on the text description, represented as joint positions over time. This data can be directly used for animation production or further motion analysis.
    - Comfy dtype: MOTION_DATA
    - Python dtype: Dict[str, np.ndarray]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class mgpt_t2m:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "mgpt_model": ("MGPTMODEL",),
            "motion_length": ("INT", {"default": 196, "min": 1, "max": 196, "step": 1}),
            "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
            "text": ("STRING", {"multiline": True,"default": "make the person jump and turn around"}),
            }
        }

    RETURN_TYPES = ("MOTION_DATA",)
    RETURN_NAMES = ("motion_data", )
    FUNCTION = "process"
    CATEGORY = "MotionDiff/mGPT"

    def process(self, seed, text, mgpt_model, motion_length):
        device = get_torch_device()
        torch.manual_seed(seed)

        prompt = mgpt_model.lm.placeholder_fulfill(text, motion_length, "", "")
        batch = {
            "length": [motion_length], #I don"t know what this is supposed to do if anything? Lenght seems to be determined by the prompt up to the max of 196
            "text": [prompt],
        }
        mgpt_model.to(device)
        outputs = mgpt_model(batch, task="t2m")
        #out_feats = outputs["feats"][0]
        #print("out_feats_shape: ",out_feats.shape)
        out_lengths = outputs["length"][0]
        #print("out_lengths: ",out_lengths)
        out_joints = outputs["joints"][:out_lengths].detach().cpu().numpy()
        mgpt_model.cpu()
        return ({"joints": out_joints.squeeze(0)},)

```
