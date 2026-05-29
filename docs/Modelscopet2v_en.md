
# Documentation
- Class name: Modelscopet2v
- Category: cspnodes/modelscope
- Output node: False

The Modelscopet2v node is specifically designed to convert text input into visual output, utilizing advanced models to interpret and visualize text descriptions. This node encapsulates the text-to-visual conversion process, capable of creating images or visual representations based on text input.

# Input types
## Required
- prompt
    - The prompt parameter specifies the text input describing the desired visual output. It plays a crucial role in guiding the model to generate images that match the given description, directly influencing the thematic and stylistic characteristics of the generated visual content.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - The negative_prompt parameter provides text input describing aspects that are not desired in the visual output. It helps optimize the generated images by guiding the model to avoid unwanted features, thereby refining the final visual representation.
    - Comfy dtype: STRING
    - Python dtype: str
- model_path
    - Specifies the model path used for generating visual content. This parameter allows selection of different models, potentially offering various styles or functionalities.
    - Comfy dtype: STRING
    - Python dtype: str
- num_inference_steps
    - Determines the number of steps the model will take during inference. A higher step count may result in more detailed and coherent visual output.
    - Comfy dtype: INT
    - Python dtype: int
- guidance_scale
    - Controls the degree to which the model follows the prompt. A higher guidance scale may produce images that more closely match the provided description.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Sets the random seed for generating visual content, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Specifies the width of the generated visual content in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the generated visual content in pixels.
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - Determines the number of frames to generate for video content, defining the length of the output video.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - This output represents the visual content generated based on the input text description. It encapsulates the text-to-visual conversion logic, producing images or video frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Modelscopet2v:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "prompt": ("STRING", {}),
                "negative_prompt": ("STRING", {"default": None}),
                "model_path": ("STRING", {"default": "cerspense/zeroscope_v2_576w"}),
                "num_inference_steps": ("INT", {"default": 25}),
                "guidance_scale": ("FLOAT", {"default": 9.0}),
                "seed": ("INT", {"default": 42}),
                "width": ("INT", {"default": 576}),
                "height": ("INT", {"default": 320}),
                "num_frames": ("INT", {"default": 24}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "generate_video_frames"
    CATEGORY = "cspnodes/modelscope"

    def generate_video_frames(self, prompt, model_path, num_inference_steps, height, width, num_frames, guidance_scale, negative_prompt, seed):
        # Set up the generator for deterministic results if seed is provided
        generator = torch.Generator()
        if seed is not None:
            generator.manual_seed(seed)

        pipe = DiffusionPipeline.from_pretrained(model_path, torch_dtype=torch.float16)
        pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
        pipe.enable_model_cpu_offload()

        # Added generator to the pipe call
        video_frames = pipe(prompt, num_inference_steps=num_inference_steps, height=height, width=width, num_frames=num_frames, guidance_scale=guidance_scale, negative_prompt=negative_prompt, generator=generator).frames
        
        # Ensure video_frames is a PyTorch tensor
        if not isinstance(video_frames, torch.Tensor):
            video_frames = torch.tensor(video_frames, dtype=torch.float32)

        # Normalize the tensor to have values between 0 and 1 if they are in the range 0-255
        if video_frames.max() > 1.0:
            video_frames = video_frames / 255.0

        # Remove the unnecessary batch dimension explicitly and permute the dimensions
        # The expected shape is (num_frames, height, width, channels)
        video_frames = video_frames.squeeze(0).permute(0, 1, 2, 3)

        # Convert the tensor to CPU and to uint8 if it's not already
        video_frames = video_frames.to('cpu')

        # return (video_frames_numpy,)
        return (video_frames,)

```
