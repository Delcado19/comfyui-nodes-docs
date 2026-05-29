# Documentation
- Class name: IPAdapterPromptScheduleFromWeightsStrategy
- Category: ipadapter/weights
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

This node is based on a weight scheduling strategy, allowing users to better control the text generation process. By adjusting weights at different stages, this node can help generate text content that better meets user needs.

# Input types

## Required

- weights_strategy
    - Weight policy, used to specify the weight policy for image generation. This parameter can control the weight policy for image generation to achieve better results.
    - Comfy dtype: WEIGHTS_STRATEGY
    - Python dtype: str
- prompt
    - Prompt, used to specify the prompt for image generation. This parameter can control the prompt for image generation to achieve better results.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt_schedule
    - The prompt_schedule output represents the result of applying the specified method to the input weights. It encapsulates the essence of the node's purpose, providing a synthesized form of the input data that can be used for further analysis or model training.
    - Comfy dtype: STRING
    - Python dtype: str


# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterPromptScheduleFromWeightsStrategy():
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "weights_strategy": ("WEIGHTS_STRATEGY",),
            "prompt": ("STRING", {"default": "", "multiline": True }),
            }}

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("prompt_schedule", )
    FUNCTION = "prompt_schedule"
    CATEGORY = "ipadapter/weights"

    def prompt_schedule(self, weights_strategy, prompt=""):
        frames = weights_strategy["frames"]
        add_starting_frames = weights_strategy["add_starting_frames"]
        add_ending_frames = weights_strategy["add_ending_frames"]
        frame_count = weights_strategy["frame_count"]

        out = ""

        prompt = [p for p in prompt.split("\n") if p.strip() != ""]

        if len(prompt) > 0 and frame_count > 0:
            # prompt_pos must be the same size as the image batch
            if len(prompt) > frame_count:
                prompt = prompt[:frame_count]
            elif len(prompt) < frame_count:
                prompt += [prompt[-1]] * (frame_count - len(prompt))

            if add_starting_frames > 0:
                out += f"\"0\": \"{prompt[0]}\",\n"
            for i in range(frame_count):
                out += f"\"{i * frames + add_starting_frames}\": \"{prompt[i]}\",\n"
            if add_ending_frames > 0:
                out += f"\"{frame_count * frames + add_starting_frames}\": \"{prompt[-1]}\",\n"

        return (out, )
```