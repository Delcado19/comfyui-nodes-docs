# Documentation
- Class name: ImageHub
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Switch between multiple input images and masks to output one group, supporting 9 groups of inputs. All input items are optional. If a group has only image or only mask, the missing item will output as None.

# Input types

## Required

- output
    - Output.
    - Comfy dtype: INT
    - Python dtype: int

- random_output
    - Random output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional

- input1_image
    - Input 1 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input1_mask
    - Input 1 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input2_image
    - Input 2 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input2_mask
    - Input 2 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input3_image
    - Input 3 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input3_mask
    - Input 3 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input4_image
    - Input 4 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input4_mask
    - Input 4 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input5_image
    - Input 5 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input5_mask
    - Input 5 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input6_image
    - Input 6 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input6_mask
    - Input 6 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input7_image
    - Input 7 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input7_mask
    - Input 7 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input8_image
    - Input 8 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input8_mask
    - Input 8 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input9_image
    - Input 9 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input9_mask
    - Input 9 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```python
class ImageHub:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):

        return {
            "required": {
                "output":  ("INT", {"default": 1, "min": 1, "max": 9, "step": 1}),
                "random_output": ("BOOLEAN", {"default": False}),
            },
            "optional": {
                "input1_image": ("IMAGE",),
                "input1_mask": ("MASK",),
                "input2_image": ("IMAGE",),
                "input2_mask": ("MASK",),
                "input3_image": ("IMAGE",),
                "input3_mask": ("MASK",),
                "input4_image": ("IMAGE",),
                "input4_mask": ("MASK",),
                "input5_image": ("IMAGE",),
                "input5_mask": ("MASK",),
                "input6_image": ("IMAGE",),
                "input6_mask": ("MASK",),
                "input7_image": ("IMAGE",),
                "input7_mask": ("MASK",),
                "input8_image": ("IMAGE",),
                "input8_mask": ("MASK",),
                "input9_image": ("IMAGE",),
                "input9_mask": ("MASK",),
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK",)
    RETURN_NAMES = ("image", "mask")
    FUNCTION = 'image_hub'
    CATEGORY = '😺dzNodes/LayerUtility'

    def image_hub(self, output, random_output,
                  input1_image=None, input1_mask=None,
                  input2_image=None, input2_mask=None,
                  input3_image=None, input3_mask=None,
                  input4_image=None, input4_mask=None,
                  input5_image=None, input5_mask=None,
                  input6_image=None, input6_mask=None,
                  input7_image=None, input7_mask=None,
                  input8_image=None, input8_mask=None,
                  input9_image=None, input9_mask=None,
                  ):

        output_list = []
        if input1_image is not None or input1_mask is not None:
            output_list.append(1)
        if input2_image is not None or input2_mask is not None:
            output_list.append(2)
        if input3_image is not None or input3_mask is not None:
            output_list.append(3)
        if input4_image is not None or input4_mask is not None:
            output_list.append(4)
        if input5_image is not None or input5_mask is not None:
            output_list.append(5)
        if input6_image is not None or input6_mask is not None:
            output_list.append(6)
        if input7_image is not None or input7_mask is not None:
            output_list.append(7)
        if input8_image is not None or input8_mask is not None:
            output_list.append(8)
        if input9_image is not None or input9_mask is not None:
            output_list.append(9)

        log(f"output_list={output_list}")
        if len(output_list) == 0:
            log(f"{NODE_NAME} is skip, because No Input.", message_type='error')
            return (None, None)

        if random_output:
            index = random.randint(1, len(output_list))
            output = output_list[index - 1]

        ret_image = None
        ret_mask = None
        if output == 1:
            if input1_image is not None:
                ret_image = input1_image
            if input1_mask is not None:
                ret_mask = input1_mask
        elif output == 2:
            if input2_image is not None:
                ret_image = input2_image
            if input2_mask is not None:
                ret_mask = input2_mask
        elif output == 3:
            if input3_image is not None:
                ret_image = input3_image
            if input3_mask is not None:
                ret_mask = input3_mask
        elif output == 4:
            if input4_image is not None:
                ret_image = input4_image
            if input4_mask is not None:
                ret_mask = input4_mask
        elif output == 5:
            if input5_image is not None:
                ret_image = input5_image
            if input5_mask is not None:
                ret_mask = input5_mask
        elif output == 6:
            if input6_image is not None:
                ret_image = input6_image
            if input6_mask is not None:
                ret_mask = input6_mask
        elif output == 7:
            if input7_image is not None:
                ret_image = input7_image
            if input7_mask is not None:
                ret_mask = input7_mask
        elif output == 8:
            if input8_image is not None:
                ret_image = input8_image
            if input8_mask is not None:
                ret_mask = input8_mask
        else:
            if input9_image is not None:
                ret_image = input9_image
            if input9_mask is not None:
                ret_mask = input9_mask

        if ret_image is None and ret_mask is None:
            log(f"{NODE_NAME} have {output_list} inputs, output is {output}, but there is no corresponding input.", message_type="error")
        elif ret_image is None:
            log(f"{NODE_NAME} have {output_list} inputs, output is {output}, but image is None.", message_type='finish')
        elif ret_mask is None:
            log(f"{NODE_NAME} have {output_list} inputs, output is {output}, but mask is None.", message_type='finish')
        else:
            log(f"{NODE_NAME} have {output_list} inputs, output is {output}.", message_type='finish')

        return (ret_image, ret_mask)
```