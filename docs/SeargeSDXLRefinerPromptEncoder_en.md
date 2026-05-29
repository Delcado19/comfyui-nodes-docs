# Documentation
- Class name: SeargeSDXLRefinerPromptEncoder
- Category: Searge/_deprecated_/ClipEncoding
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to process and refine text inputs by encoding them into a structured format that is critical for subsequent analysis or generation tasks. It focuses on converting positive and negative references into conditioning formats, which is essential for downstream steps in the pipeline.

# Input types
## Required
- refiner_clip
    - This parameter is critical because it provides the foundation for the encoding process. It is a reference to the CLIP model, which will be used to tokenize and encode the input text, enabling the text data to be processed by the node.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
- pos_r
    - This parameter is essential for providing positive reference text. It influences the encoding process by determining the context and quality of the positive conditioning data used in subsequent tasks.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_r
    - This parameter is essential for providing negative reference text. It influences the encoding by establishing the context for negative conditioning data, which is critical for the accuracy and effectiveness of downstream steps.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_ascore
    - This parameter is important because it sets the aesthetic score for the positive reference. It plays a key role in guiding the refinement process, ensuring the encoded output meets the desired aesthetic standards.
    - Comfy dtype: FLOAT
    - Python dtype: float
- neg_ascore
    - This parameter is important for defining the aesthetic score for the negative reference. It helps shape the refinement process to meet the aesthetic standards required for negative conditioning data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refiner_width
    - This parameter is critical in determining the width of the refinement space. It directly affects the dimensions of the output, ensuring the encoding meets the specific requirements of downstream tasks.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_height
    - This parameter is essential for setting the height of the refinement space. It works together with the width parameter to define the overall size of the conditioning data, which is critical for the precision of the encoding process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- refiner_positive
    - The output provides encoded positive reference data, which is a key component for tasks requiring positive conditioning context.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[CLIPCondition, Dict[str, Union[float, int]]]
- refiner_negative
    - The output provides encoded negative reference data, which is a fundamental element for tasks that rely on negative conditioning context.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[CLIPCondition, Dict[str, Union[float, int]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
