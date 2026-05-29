# Documentation
- Class name: SeargeSDXLPromptEncoder
- Category: Searge/_deprecated_/ClipEncoding
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to process and encode text input into conditioning data for generative models. It focuses on converting prompts into structured formats that can guide the generative process, emphasizing the node's role in preparing inputs for creative tasks.

# Input types
## Required
- base_clip
    - This parameter is critical as it provides the foundational CLIP model used to encode text prompts. It is essential for the node's operation and influences the quality of the generated conditioning data.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- refiner_clip
    - The refiner CLIP model is used to further process and refine text prompts, enhancing the effectiveness of the conditioning data. Its role in node execution and final output quality is crucial.
    - Comfy dtype: CLIP
    - Python dtype: CLIPModel
- base_width
    - The base width parameter is essential for defining the dimensions of the input space for the generative model, directly affecting the range and resolution of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- base_height
    - Similar to base width, the base height parameter is crucial for setting the vertical dimensions of the input space, influencing the overall structure and composition of the output.
    - Comfy dtype: INT
    - Python dtype: int
- crop_w
    - The crop width parameter determines the horizontal extent of the cropping area, which is essential for focusing the generation on specific regions of interest within the input.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h
    - The crop height parameter sets the vertical dimensions of the cropping area, playing a key role in isolating specific elements during the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- target_width
    - The target width parameter defines the desired width of the output, a critical factor in ensuring the generated content meets the required specifications and dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- target_height
    - The target height parameter specifies the desired height of the output, directly impacting the final size and layout of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- pos_ascore
    - The positive aesthetic score parameter is used to weight the importance of positive prompts during the generation process, ensuring the output reflects the desired aesthetic qualities.
    - Comfy dtype: FLOAT
    - Python dtype: float
- neg_ascore
    - The negative aesthetic score parameter helps reduce undesirable aesthetic elements in the output, improving the precision and relevance of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_width
    - The refiner width parameter is important for setting the dimensions of the refiner input space, which is crucial for achieving detailed and high-quality refinement in the output.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_height
    - The refiner height parameter is essential for defining the vertical dimensions of the refiner input space, affecting the granularity and precision of aesthetic refinement in the output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- pos_g
    - This parameter contains the positive global prompt, which influences the overall theme and direction of the generated content. It is significant in setting the creative context for node operation.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The positive local prompt provides detailed guidance for specific aspects of the generation, helping the node produce targeted and nuanced output.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_r
    - The positive refiner prompt is used to fine-tune the generation process, ensuring the output closely aligns with the desired aesthetic and thematic goals.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - The negative global prompt helps exclude unwanted elements from the generated content, playing a key role in shaping the characteristics of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - The negative local prompt is used to specify particular aspects to avoid in the generation, guiding the node to produce content that meets specific exclusion criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_r
    - The negative refiner prompt is used to further refine the exclusion of unwanted elements, ensuring the node's output has a high degree of precision.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- base_positive
    - This output provides conditioning data derived from the base positive prompt, serving as a foundation for guiding the generative model toward the desired creative direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData
- base_negative
    - The base negative output contains conditioning data from the base negative prompt, helping to exclude unwanted elements from the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData
- refiner_positive
    - This output includes conditioning data from the refiner positive prompt, focusing on fine-tuning the aesthetic and thematic aspects of the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData
- refiner_negative
    - The refiner negative output provides conditioning data based on the refiner negative prompt, ensuring the final output is refined to avoid unwanted features.
    - Comfy dtype: CONDITIONING
    - Python dtype: ConditioningData

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
