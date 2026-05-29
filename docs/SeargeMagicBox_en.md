# Documentation
- Class name: SeargeMagicBox
- Category: UI.CATEGORY_MAGIC
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node serves as the central coordinator of the image generation process, managing data flow and execution of each stage based on user input and system settings. It is designed to handle complex workflows involving preprocessing, model loading, conditioning, sampling, and post‑processing to produce high‑quality images while allowing extensive customization and control of the generation process.

# Input types
## Required
- stage
- The stage parameter determines the specific operation to execute within the node. It acts as a selector among the node’s various functions, such as loading checkpoints, applying control nets, or generating images. The chosen stage directly influences the output and subsequent steps in the image generation pipeline.
    - Comfy dtype: COMBO[STAGES]
    - Python dtype: str
- input_from
- This parameter specifies the source of the node’s input data. It can be a predefined data stream or a user‑defined input. Input data is critical because it forms the basis for all subsequent processing and directly affects the node’s final output.
    - Comfy dtype: COMBO[INPUT_OUTPUT]
    - Python dtype: str
- output_to
- The output_to parameter indicates where the node’s output should point. It can be set to a custom output or a further processing data stream. This parameter is essential for determining internal data flow within the system and influences how the node’s results are used.
    - Comfy dtype: COMBO[INPUT_OUTPUT]
    - Python dtype: str
## Optional
- data
- The data parameter is a dictionary containing all necessary information and intermediate results that are passed between different stages of the pipeline. It serves as the backbone of the data flow, ensuring that all stages have access to the data required for processing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- custom_input
- When the node provides custom input, use this parameter. It allows injection of external data or specific configurations that are not part of the standard data stream. The custom_input parameter offers flexibility and adaptability in the image generation process.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Output types
- data
- The node’s data output contains the results of the image generation process, including any processed images, latent representations, and other relevant information. This data serves as input for subsequent pipeline stages or can be saved as the final output.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- custom_output
- When input_from is set to custom, use the custom_output parameter. It allows customization of the node’s output to meet specific user requirements or to integrate into a broader system.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
