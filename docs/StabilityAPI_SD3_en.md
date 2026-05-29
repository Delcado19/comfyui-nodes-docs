
# Documentation
- Class name: StabilityAPI_SD3
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The StabilityAPI_SD3 node interacts with the StabilityAI API to generate images or transform existing ones. The node simplifies API interaction complexity, allowing users to focus on creative tasks.

# Input types
## Required
- prompt
- Accepts text descriptions or prompts to guide the image generation process, influencing visual output based on the provided text.
    - Comfy dtype: STRING
    - Python dtype: str
- n_prompt
- Specifies the number of prompts to use, allowing multiple prompts to affect the generation process.
    - Comfy dtype: STRING
    - Python dtype: int
- seed
- Provides a seed value for the random number generator, ensuring reproducibility of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- model
- Defines the model used for image generation, enabling selection based on desired features or capabilities.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- aspect_ratio
- Sets the aspect ratio of the output image, controlling image dimensions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_format
- Determines the output image format, such as JPEG or PNG, to meet user preferences.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- api_key
- Supplies the API key required to access the StabilityAI API, ensuring authorized use.
    - Comfy dtype: STRING
    - Python dtype: str
- image
- Provides an initial image for img2img tasks, serving as the basis for transformation or enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- img2img_strength
- Controls the strength of transformations applied to the initial image in img2img tasks, adjusting the degree of change.
    - Comfy dtype: FLOAT
    - Python dtype: float
- disable_metadata
- Disables embedding metadata in generated images, offering control over privacy and data storage.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
- Outputs the generated or transformed image as the node's result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- ui
- Returns a UI component, typically used to display the generated or transformed image.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class StabilityAPI_SD3:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "prompt": ("STRING", {"multiline": True}),
                "n_prompt": ("STRING", {"multiline": True}),
                "seed": ("INT", {"default": 123,"min": 0, "max": 4294967294, "step": 1}),
                "model": (
                [   
                    'sd3',
                    'sd3-turbo',
                ],
                {
                "default": 'sd3'
                 }),
                 "aspect_ratio": (
                [   
                    '1:1',
                    '16:9',
                    '21:9',
                    '2:3',
                    '3:2',
                    '4:5',
                    '5:4',
                    '9:16',
                    '9:21',
                ],
                {
                "default": '1:1'
                }),
                "output_format": (
                [   
                    'png',
                    'jpeg',
                ],
                {
                "default": 'jpeg'
                 }),                 
            },
            "optional": {
                "api_key": ("STRING", {"multiline": True}),
                "image": ("IMAGE",),
                "img2img_strength": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.01}),
                "disable_metadata": ("BOOLEAN", {"default": True}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apicall"

    CATEGORY = "KJNodes/experimental"
    DESCRIPTION = """
## Calls StabilityAI API
   
Although you may have multiple keys in your account,  
you should use the same key for all requests to this API.  

Get your API key here: https://platform.stability.ai/account/keys  
Recommended to set the key in the config.json -file under this  
node packs folder.  
# WARNING:  
Otherwise the API key may get saved in the image metadata even  
with "disable_metadata" on if the workflow includes save nodes  
separate from this node.  
   
sd3 requires 6.5 credits per generation  
sd3-turbo requires 4 credits per generation  

If no image is provided, mode is set to text-to-image  

"""

    def apicall(self, prompt, n_prompt, model, seed, aspect_ratio, output_format, 
                img2img_strength=0.5, image=None, disable_metadata=True, api_key=""):
        from comfy.cli_args import args
        if disable_metadata:
            args.disable_metadata = True
        else:
            args.disable_metadata = False
        
        import requests
        from io import BytesIO
        from torchvision import transforms
        
        data = {
                "mode": "text-to-image",
                "prompt": prompt,
                "model": model,
                "seed": seed,
                "output_format": output_format
                }
        
        if image is not None:
            image = image.permute(0, 3, 1, 2).squeeze(0)
            to_pil = transforms.ToPILImage()
            pil_image = to_pil(image)
            # Save the PIL Image to a BytesIO object
            buffer = BytesIO()
            pil_image.save(buffer, format='PNG')
            buffer.seek(0)
            files = {"image": ("image.png", buffer, "image/png")}
           
            data["mode"] = "image-to-image"
            data["image"] = pil_image
            data["strength"] = img2img_strength
        else:
            data["aspect_ratio"] = aspect_ratio,
            files = {"none": ''}
        
        if model != "sd3-turbo":
            data["negative_prompt"] = n_prompt

        headers={
                "accept": "image/*"
            }
        
        if api_key != "":
            headers["authorization"] = api_key
        else:
            config_file_path = os.path.join(script_directory,"config.json")
            with open(config_file_path, 'r') as file:
                config = json.load(file)
            api_key_from_config = config.get("sai_api_key")
            headers["authorization"] = api_key_from_config            
        
        response = requests.post(
            f"https://api.stability.ai/v2beta/stable-image/generate/sd3",
            headers=headers,
            files = files,
            data = data,
        )

        if response.status_code == 200:
            # Convert the response content to a PIL Image
            image = Image.open(BytesIO(response.content))
            # Convert the PIL Image to a PyTorch tensor
            transform = transforms.ToTensor()
            tensor_image = transform(image)
            tensor_image = tensor_image.unsqueeze(0)
            tensor_image = tensor_image.permute(0, 2, 3, 1).cpu().float()
            return (tensor_image,)
        else:
            try:
                # Attempt to parse the response as JSON
                error_data = response.json()
                raise Exception(f"Server error: {error_data}")
            except json.JSONDecodeError:
                # If the response is not valid JSON, raise a different exception
                raise Exception(f"Server error: {response.text}")

```
