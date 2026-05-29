
# Documentation
- Class name: LLMLLaVANextImageEvaluator
- Category: SALT/Language Toolkit/Tools
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMLLaVANextImageEvaluator node is specifically designed to evaluate images using the LLaVA Next V1 model, generating descriptions or captions based on the provided prompt and images. It simplifies the complexity of image processing and model evaluation, providing a streamlined interface for generating textual representations of images.

# Input types
## Required
- lnv1_model
    - The LLaVA Next V1 model used for evaluating images. It is critical to execution as it directly impacts the quality and relevance of the generated captions.
    - Comfy dtype: LLAVA_NEXT_V1_MODEL
    - Python dtype: LlavaNextV1
- images
    - A batch of images represented as tensors. These images are the primary subjects of evaluation and caption generation, serving as the main input to the model.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- max_tokens
    - Specifies the maximum number of tokens generated for each image description. This parameter controls the level of detail and granularity of the output captions.
    - Comfy dtype: INT
    - Python dtype: int
- prompt_format
    - The format used to construct the model prompt, integrating images and user instructions into a structured template.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The specific prompt or instruction given to the model for generating image descriptions, influencing the context and focus of the generated text.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- strings
    - The raw string of the generated image description.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- list
    - A list of raw strings, each representing a generated description for an input image.
    - Comfy dtype: LIST
    - Python dtype: List[str]
- documents
    - A collection of Document objects, each encapsulating a generated image description along with additional metadata such as the user prompt and image thumbnail.
    - Comfy dtype: DOCUMENT
    - Python dtype: List[Document]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LLMLLaVANextImageEvaluator:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "lnv1_model": ("LLAVA_NEXT_V1_MODEL",),
                "images": ("IMAGE",),
                "max_tokens": ("INT", {"min": 0, "max": 2048, "default": 48}),
                "prompt_format": ("STRING", {"multiline": True, "dynamicPrompt": False, "default": "[INST] SYSTEM: You are a professional image captioner, follow the directions of the user exactly.\nUSER: <image>\n<prompt>[/INST]"}),
                "prompt": ("STRING", {"multiline": True, "dynamicPrompt": False, "default": "Describe the image in search engine keyword tags"}),
            }
        }

    RETURN_TYPES = ("STRING", "LIST", "DOCUMENT")
    RETURN_NAMES = ("strings", "list", "documents")
    OUTPUT_IS_LIST =(True, False)

    FUNCTION = "eval"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Tools"

    def eval(
        self, 
        lnv1_model: LlavaNextV1,
        images: torch.Tensor,  
        max_tokens: int = 48, 
        prompt_format: str = "[INST] SYSTEM: You are a professional image captioner, follow the directions of the user exactly.\nUSER: <image>\n<prompt>[/INST]",
        prompt: str = "Describe the image in search engine keyword tags"
    ):
        results = []
        for image in images:
            pil_image = tensor2pil(image)
            results.append(lnv1_model.eval(pil_image, prompt, prompt_format, max_tokens=max_tokens))
        documents = [Document(text=result, extra_info={"user_prompt": prompt, "thumbnail": self.b64_thumb(pil_image, (128, 64))}) for result in results]
        return (results, results, documents)

    def b64_thumb(self, image, max_size=(128, 128)):
        image.thumbnail(max_size, Image.Resampling.LANCZOS)
        buffered = io.BytesIO()
        image.save(buffered, format="JPEG")
        base64_string = base64.b64encode(buffered.getvalue()).decode("utf-8")
        return base64_string

```
