# Documentation
- Class name: ToDetailerPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ToDetailerPipe node is designed to convert input data into a more detailed and structured format. It refines and enhances data detail levels by integrating components such as models, clips, and detectors. This node plays a key role in preparing data for further analysis or visualization, ensuring data meets necessary quality and detail standards.

# Input types
## Required
- model
    - Model parameters are critical to the node’s operation because they define the primary algorithmic framework for data conversion. They directly affect the node’s ability to process and refine input data, ensuring the output meets the expected detail requirements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - Clip parameters are a key component of the data conversion process, assisting conversion by providing contextual information and constraints. They ensure the conversion follows specific guidelines, maintaining output data integrity and consistency.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- vae
    - VAE (Variational Autoencoder) is an important element in the node architecture, responsible for encoding and decoding data into latent space representations. It plays a vital role in detail enhancement, enabling the node to generate detailed and rich output from input data.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive
    - Positive parameters guide node operation by providing positive examples or conditions that the output should follow. This is essential for ensuring the node’s output aligns with the desired quality and detail standards.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- negative
    - Negative parameters complement positive parameters by providing examples or conditions the output should avoid. They are crucial for steering the node to produce output that meets required standards without unwanted features.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- bbox_detector
    - The bbox_detector parameter is essential for identifying and locating regions of interest in the input data. It helps the node focus on specific areas, enhancing output detail and precision.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: Callable
- wildcard
    - Wildcard parameters allow dynamic and flexible data handling, enabling the node to adapt to various input scenarios. They are important for ensuring the node can process diverse data types and formats, increasing its versatility and utility.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- Select to add LoRA
    - The LoRA selection parameter provides flexibility to incorporate specific Low‑Rank Adaptations into the node’s processing pipeline. This can enhance the node’s capabilities by allowing it to adjust its operation for particular use cases or requirements.
    - Comfy dtype: COMBO['Select the LoRA to add to the text', folder_paths.get_filename_list('loras')]
    - Python dtype: Union[str, None]
- Select to add Wildcard
    - Additional wildcard parameters offer the option to include more dynamic elements in node operation. They can introduce variability and adjust the node’s behavior based on different data inputs or processing needs.
    - Comfy dtype: COMBO['Select the Wildcard to add to the text']
    - Python dtype: Union[str, None]

# Output types
- detailer_pipe
    - The detailer_pipe output represents the result of the node’s processing, containing detailed and refined data. It marks successful execution and provides a structured format for downstream applications.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
