# Documentation
- Class name: WD14Tagger
- Category: image
- Output node: True
- Repo Ref: https://github.com/pythongosssss/ComfyUI-WD14-Tagger

This node aims to tag images by using a specified model to classify input image data and return relevant tags. It processes each image in a batch, applies thresholds to filter tags, and respects any exclusion criteria provided. Its primary goal is to enhance the organization and retrieval of image data through automated tagging.

# Input types
## Required
- image
    - The image parameter is critical because it provides the raw data required for the tagging process. Without this input, the node cannot perform its primary function of classifying and tagging images.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- model
    - The model parameter is critical because it determines the specific machine learning model used for the image tagging process. It influences the accuracy and relevance of the generated tags.
    - Comfy dtype: all_models
    - Python dtype: callable
- threshold
    - The threshold parameter is important because it sets the minimum confidence level for tags to be included in the output. It directly affects tag filtering, determining which are considered significant enough to be reported.
    - Comfy dtype: FLOAT
    - Python dtype: float
- character_threshold
    - This parameter refines the tagging process by setting a specific secondary threshold for character-level tags. It helps filter out less relevant character tags, improving the precision of the tagging results.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- exclude_tags
    - The exclude_tags parameter allows specifying tags that should not be included in the output. This is useful for tailoring tagging results to specific requirements or avoiding certain tags for various reasons.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- tags
    - The tags output is the result of the image tagging process, containing a list of relevant and significant tags based on the input images and applied thresholds. It is the critical output as it directly represents the primary function of the node and the effectiveness of the tagging process.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class WD14Tagger:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'model': (all_models,), 'threshold': ('FLOAT', {'default': defaults['threshold'], 'min': 0.0, 'max': 1, 'step': 0.05}), 'character_threshold': ('FLOAT', {'default': defaults['character_threshold'], 'min': 0.0, 'max': 1, 'step': 0.05}), 'exclude_tags': ('STRING', {'default': defaults['exclude_tags']})}}
    RETURN_TYPES = ('STRING',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'tag'
    OUTPUT_NODE = True
    CATEGORY = 'image'

    def tag(self, image, model, threshold, character_threshold, exclude_tags=''):
        tensor = image * 255
        tensor = np.array(tensor, dtype=np.uint8)
        pbar = comfy.utils.ProgressBar(tensor.shape[0])
        tags = []
        for i in range(tensor.shape[0]):
            image = Image.fromarray(tensor[i])
            tags.append(wait_for_async(lambda : tag(image, model, threshold, character_threshold, exclude_tags)))
            pbar.update(1)
        return {'ui': {'tags': tags}, 'result': (tags,)}
```