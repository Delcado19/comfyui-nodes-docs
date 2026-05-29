# Documentation
- Class name: IPAdapterWeightsFromStrategy
- Category: ipadapter/weights
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The main function of this node is to generate weights for IP adapters based on predefined strategies.
These weights can be applied at different stages of image processing to achieve specific effects or optimize the processing pipeline.

# Input types

## Required

- weights_strategy
    - Weight policy, used to specify the weight policy for image generation. This parameter can control the weight policy for image generation to achieve better results.
    - Comfy dtype: WEIGHTS_STRATEGY
    - Python dtype: str

## Optional

- image
  - image, used to specify the image for generating the image. This parameter can be used to control the image for generating the image to achieve better results.
  - Comfy dtype: IMAGE
  - Python dtype: torch.Tensor

# Output types
- weights
  - weights output represents the result of applying the specified method to the input weights. It contains the essence of the node's purpose, providing a synthesized form of the input data that can be used for further analysis or model training.
  - Comfy dtype: FLOAT
  - Python dtype: float

- weights_invert
  - weight inversion, used to specify the weight inversion for generating the image. This parameter can be used to control the weight inversion for generating the image to achieve better results.
  - Comfy dtype: FLOAT
  - Python dtype: float

- total_frames
  - total frames, used to specify the total number of frames for generating the image. This parameter can be used to control the total number of frames for generating the image to achieve better results.
  - Comfy dtype: INT
  - Python dtype: int

- image1
  - image1
  - Comfy dtype: IMAGE
  - Python dtype: torch.Tensor

- image2
  - image2
  - Comfy dtype: IMAGE
  - Python dtype: torch.Tensor

- weight_strategy
  - weight strategy
  - Comfy dtype: WEIGHTS_STRATEGY
  - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterWeightsFromStrategy(IPAdapterWeights):
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "weights_strategy": ("WEIGHTS_STRATEGY",),
            }, "optional": {
                "image": ("IMAGE",),
            }
        }
```