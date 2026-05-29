# Documentation
- Class name: SVD_img2vid_Conditioning
- Category: conditioning/video_models
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SVD_img2vid_Conditioning node is designed to process and condition video frames for generation. It encodes the initial image and scales it to the desired dimensions, then applies enhancements as specified. The node utilizes a VAE to encode pixel information and generates positive and negative conditioning samples for video frame generation, along with latent representations for further processing.

# Input types
## Required
- clip_vision
    - The clip_vision parameter is essential for the initial encoding of the image. It is used to generate image embeddings, which are indispensable for the subsequent video frame conditioning process.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module
- init_image
    - The init_image parameter is the starting point for the video generation process. It is the image that is encoded and upscaled to form the basis of the video frames.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- vae
    - The vae parameter represents the variational autoencoder used in the node. It is responsible for encoding the upscaled pixel information into a latent space representation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- width
    - The width parameter determines the horizontal resolution of the upscaled image. It is an important factor in determining the final quality and dimensions of the video frames.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical resolution of the upscaled image. Together with the width, it defines the overall size of the video frames.
    - Comfy dtype: INT
    - Python dtype: int
- video_frames
    - The video_frames parameter specifies the total number of frames to generate for the video. It directly affects the length of the video.
    - Comfy dtype: INT
    - Python dtype: int
- motion_bucket_id
    - The motion_bucket_id parameter is used to select specific motion characteristics for the video frames, influencing the style of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps parameter stands for frames per second and determines the playback speed of the generated video.
    - Comfy dtype: INT
    - Python dtype: int
- augmentation_level
    - The augmentation_level parameter controls the degree of random perturbation applied to the upscaled pixels, adding variability to the video frames.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The positive output provides a set of conditioning samples used to guide the video generation process toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]]
- negative
    - The negative output includes conditioning samples that help refine the video generation by providing examples to avoid.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]]
- latent
    - The latent output contains the encoded latent representations of the video frames, suitable for further analysis or manipulation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class SVD_img2vid_Conditioning:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip_vision': ('CLIP_VISION',), 'init_image': ('IMAGE',), 'vae': ('VAE',), 'width': ('INT', {'default': 1024, 'min': 16, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'height': ('INT', {'default': 576, 'min': 16, 'max': nodes.MAX_RESOLUTION, 'step': 8}), 'video_frames': ('INT', {'default': 14, 'min': 1, 'max': 4096}), 'motion_bucket_id': ('INT', {'default': 127, 'min': 1, 'max': 1023}), 'fps': ('INT', {'default': 6, 'min': 1, 'max': 1024}), 'augmentation_level': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'LATENT')
    RETURN_NAMES = ('positive', 'negative', 'latent')
    FUNCTION = 'encode'
    CATEGORY = 'conditioning/video_models'

    def encode(self, clip_vision, init_image, vae, width, height, video_frames, motion_bucket_id, fps, augmentation_level):
        output = clip_vision.encode_image(init_image)
        pooled = output.image_embeds.unsqueeze(0)
        pixels = comfy.utils.common_upscale(init_image.movedim(-1, 1), width, height, 'bilinear', 'center').movedim(1, -1)
        encode_pixels = pixels[:, :, :, :3]
        if augmentation_level > 0:
            encode_pixels += torch.randn_like(pixels) * augmentation_level
        t = vae.encode(encode_pixels)
        positive = [[pooled, {'motion_bucket_id': motion_bucket_id, 'fps': fps, 'augmentation_level': augmentation_level, 'concat_latent_image': t}]]
        negative = [[torch.zeros_like(pooled), {'motion_bucket_id': motion_bucket_id, 'fps': fps, 'augmentation_level': augmentation_level, 'concat_latent_image': torch.zeros_like(t)}]]
        latent = torch.zeros([video_frames, 4, height // 8, width // 8])
        return (positive, negative, {'samples': latent})
```