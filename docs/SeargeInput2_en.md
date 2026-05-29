# Documentation
- Class name: SeargeInput2
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeInput2 node is designed to handle the initial input for image processing tasks. It is responsible for configuring and initiating parameters that define image characteristics, such as its dimensions, the number of processing steps, and configuration settings that will guide the processing algorithm. This node abstracts the complexity of setting up these parameters, providing users with a simplified interface for inputting data required for image generation or manipulation.

# Input types
## Required
- seed
    - The 'seed' parameter is crucial for the image generation process as it ensures reproducibility of results. It serves as the starting point for random number generation, influencing the final output image. The importance of this parameter lies in its ability to control randomness and achieve consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int
- image_width
    - The 'image_width' parameter specifies the desired width of the generated image. It plays a significant role in determining the overall dimensions of the image, which can affect the level of detail and computational resources required for processing. This parameter is essential for setting the scale of the visual output.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The 'image_height' parameter defines the vertical dimension of the image. Similar to 'image_width', it is a key determinant of image resolution and has implications for detail and computational load. Adjusting this parameter can control the aspect ratio and overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The 'steps' parameter refers to the number of iterations or steps the image processing algorithm will execute. It directly impacts the quality and detail of the final image, with more steps typically resulting in finer outcomes. This parameter is crucial for balancing the trade-off between processing time and output quality.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The 'cfg' parameter, representing configuration settings, is used to fine-tune the image processing algorithm. It influences various aspects of image generation, such as clarity and the presence of certain features. This parameter is important for achieving the desired visual effects and ensuring the output meets specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The 'sampler_name' parameter selects the sampling method used for the stochastic process in image generation. It is important for determining the randomness and diversity of the generated images. The choice of sampler can significantly influence the style and characteristics of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The 'scheduler' parameter determines the scheduling strategy for the image generation process. It dictates how the algorithm progresses through steps, which can affect efficiency and the final result. This parameter is crucial for optimizing the generation process and achieving the best results within a given timeframe.
    - Comfy dtype: STRING
    - Python dtype: str
- save_image
    - The 'save_image' parameter indicates whether the generated image should be saved to a file. It controls the action taken after image processing and is important for users who wish to retain the output for further use or analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- save_directory
    - The 'save_directory' parameter specifies the location where generated images will be saved. It is essential for organizing output and ensuring users can easily access and manage their files.
    - Comfy dtype: STRING
    - Python dtype: str
- inputs
    - The 'inputs' parameter is an optional dictionary that allows users to provide additional settings or parameters for the image processing task. It offers flexibility and customization, enabling users to tailor the node's behavior to specific requirements.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The 'parameters' output contains the set of configurations and inputs processed by the SeargeInput2 node. It encapsulates all necessary information required for subsequent stages of image processing, ensuring a smooth transition from input to execution.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
