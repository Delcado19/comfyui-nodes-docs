
# Documentation
- Class name: BindImageListPromptList __Inspire
- Category: InspirePack/Prompt
- Output node: False

The BindImageListPromptList node is designed to integrate image lists with corresponding prompt lists to create rich visual-text datasets. This node simplifies the binding process of images with their corresponding prompts, making the processing of visual and textual data more efficient and organized, which can be used for creative or analytical purposes.

# Input types
## Required
- images
    - The images parameter accepts a list of images to be bound with prompts, serving as the visual component of the dataset.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- zipped_prompts
    - The zipped_prompts parameter accepts a list of prompts (in zipped format) associated with the images, serving as the textual component of the dataset.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: List[Tuple[str, str, str]]
- default_positive
    - The default_positive parameter specifies a default positive prompt, used when the number of prompts is less than the number of images.
    - Comfy dtype: STRING
    - Python dtype: str
- default_negative
    - The default_negative parameter specifies a default negative prompt, used similarly to the default positive prompt, ensuring all images have corresponding prompts.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - Returns the original image list, maintaining the integrity of the visual data.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- positive
    - Returns a list of positive prompts, each corresponding to an image, enriching the dataset with positive textual annotations.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- negative
    - Returns a list of negative prompts, complementing the positive prompts, providing contrasting textual annotations for each image.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- prompt_label
    - Returns a list of prompt labels, providing additional contextual or classification information for the bound image-prompt pairs.
    - Comfy dtype: STRING
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class BindImageListPromptList:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "zipped_prompts": ("ZIPPED_PROMPT",),
                "default_positive": ("STRING", {"multiline": True, "placeholder": "default positive"}),
                "default_negative": ("STRING", {"multiline": True, "placeholder": "default negative"}),
            }
        }

    INPUT_IS_LIST = True

    RETURN_TYPES = ("IMAGE", "STRING", "STRING", "STRING")
    RETURN_NAMES = ("image", "positive", "negative", "prompt_label")

    OUTPUT_IS_LIST = (True, True, True,)

    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    def doit(self, images, zipped_prompts, default_positive, default_negative):
        positives = []
        negatives = []
        prompt_labels = []

        if len(images) < len(zipped_prompts):
            zipped_prompts = zipped_prompts[:len(images)]

        elif len(images) > len(zipped_prompts):
            lack = len(images) - len(zipped_prompts)
            default_prompt = (default_positive[0], default_negative[0], "default")
            zipped_prompts = zipped_prompts[:]
            for i in range(lack):
                zipped_prompts.append(default_prompt)

        for prompt in zipped_prompts:
            a, b, c = prompt
            positives.append(a)
            negatives.append(b)
            prompt_labels.append(c)

        return (images, positives, negatives, prompt_labels)

```
