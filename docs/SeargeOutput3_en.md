# Documentation
- Class name: SeargeOutput3
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class encapsulates the logic of decomposing a set of parameters into individual components, facilitating further processing and analysis within the system.

# Input types
## Required
- parameters
    - This parameter serves as a key input, containing a dictionary of various settings that determine the node's behavior and output.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The original parameter set is passed through, preserving the integrity of the input data.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]
- denoise
    - This output represents a denoising setting, which is crucial for the image quality enhancement process.
    - Comfy dtype: Float
    - Python dtype: float
- base_ratio
    - The base ratio output controls the fundamental aspects of image scaling, ensuring proportion and consistency.
    - Comfy dtype: Float
    - Python dtype: float
- refiner_strength
    - The refinement intensity is an output that affects the fine-tuning process of image details, aiming to optimize clarity and sharpness.
    - Comfy dtype: Float
    - Python dtype: float
- noise_offset
    - The noise offset output is vital for adjusting the noise level in the image, helping to improve overall visual quality.
    - Comfy dtype: Float
    - Python dtype: float
- precondition_steps
    - This output defines the number of preprocessing steps to execute, an essential component of the image processing pipeline preparation stage.
    - Comfy dtype: Int
    - Python dtype: int
- batch_size
    - The batch size output determines how many images are processed simultaneously, affecting system efficiency and throughput.
    - Comfy dtype: Int
    - Python dtype: int
- upscale_resolution_factor
    - This output defines the scaling factor applied to image resolution, a key factor in achieving the desired output size.
    - Comfy dtype: Float
    - Python dtype: float
- save_upscaled_image
    - The save enlarged image output is a flag that determines whether the processed image should be saved, affecting data persistence.
    - Comfy dtype: Bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
