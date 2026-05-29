# Documentation
- Class name: PCScheduleSettings
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

This node is designed to manage and adjust parameters of the prompt schedule, which is critical for controlling the generation process of AI models. It ensures the model's output is fine-tuned according to specified settings, optimizing the quality and relevance of results.

# Input types
## Optional
- steps
    - The step parameter is essential for defining the progression of the AI model's output over a number of iterations. It influences the model's ability to refine its responses and achieve the desired level of detail and coherence.
    - Comfy dtype: INT
    - Python dtype: int
- mask_width
    - The mask width parameter plays a significant role in shaping the spatial dimensions of the model's output. It helps control the breadth of generated content, ensuring it aligns with the intended scope and structure.
    - Comfy dtype: INT
    - Python dtype: int
- mask_height
    - The mask height parameter is critical for defining the vertical structure of the model's output. It works together with mask width to establish the overall spatial configuration, which is essential for maintaining content integrity.
    - Comfy dtype: INT
    - Python dtype: int
- sdxl_width
    - The SDXL width parameter is important for setting the horizontal scale of the model's output. It affects how the model distributes information across the width, ensuring content is appropriately detailed and balanced.
    - Comfy dtype: INT
    - Python dtype: int
- sdxl_height
    - The SDXL height parameter is critical for establishing the vertical scale of the model's output. It works together with SDXL width to create a harmonious balance, ensuring the structure of the content is coherent and proportionally aligned.
    - Comfy dtype: INT
    - Python dtype: int
- sdxl_target_w
    - The SDXL target width parameter is essential for setting the desired width of the output. It guides the model in achieving the target dimensions, which is critical for maintaining the visual and structural integrity of generated content.
    - Comfy dtype: INT
    - Python dtype: int
- sdxl_target_h
    - The SDXL target height parameter is critical for defining the desired height of the output. It works together with SDXL target width to ensure the model's output is properly scaled and fits the intended dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- sdxl_crop_w
    - The SDXL crop width parameter is important for specifying the width of the region cropped from the model's output. It helps refine the final output by focusing on the most relevant parts, improving the precision and relevance of the content.
    - Comfy dtype: INT
    - Python dtype: int
- sdxl_crop_h
    - The SDXL crop height parameter is critical for defining the height of the region cropped from the model's output. It works together with SDXL crop width to ensure the cropped content is focused and consistent with the intended output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- settings
    - The settings output provides a comprehensive summary of the applied schedule parameters, which is essential for monitoring and adjusting the AI model's behavior. It ensures the model operates within the desired parameters, yielding optimized and targeted results.
    - Comfy dtype: SCHEDULE_SETTINGS
    - Python dtype: Tuple[int, int, int, int, int, int, int, int, int]

# Usage tips
- Infra type: CPU

# Source code
```
class PCScheduleSettings:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'steps': ('INT', {'default': 0, 'min': 0, 'max': 10000}), 'mask_width': ('INT', {'default': 512, 'min': 64, 'max': 4096 * 4}), 'mask_height': ('INT', {'default': 512, 'min': 64, 'max': 4096 * 4}), 'sdxl_width': ('INT', {'default': 1024, 'min': 0, 'max': 4096 * 4}), 'sdxl_height': ('INT', {'default': 1024, 'min': 0, 'max': 4096 * 4}), 'sdxl_target_w': ('INT', {'default': 1024, 'min': 0, 'max': 4096 * 4}), 'sdxl_target_h': ('INT', {'default': 1024, 'min': 0, 'max': 4096 * 4}), 'sdxl_crop_w': ('INT', {'default': 0, 'min': 0, 'max': 4096 * 4}), 'sdxl_crop_h': ('INT', {'default': 0, 'min': 0, 'max': 4096 * 4})}}
    RETURN_TYPES = ('SCHEDULE_SETTINGS',)
    CATEGORY = 'promptcontrol'
    FUNCTION = 'apply'

    def apply(self, steps=0, mask_width=512, mask_height=512, sdxl_width=1024, sdxl_height=1024, sdxl_target_w=1024, sdxl_target_h=1024, sdxl_crop_w=0, sdxl_crop_h=0):
        settings = {'steps': steps, 'mask_width': mask_width, 'mask_height': mask_height, 'sdxl_width': sdxl_width, 'sdxl_height': sdxl_height, 'sdxl_twidth': sdxl_target_w, 'sdxl_theight': sdxl_target_h, 'sdxl_cwidth': sdxl_crop_w, 'sdxl_cheight': sdxl_crop_h}
        return (settings,)
```