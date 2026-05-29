# Documentation
- Class name: latentCompositeMaskedWithCond
- Category: EasyUse/Latent
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node integrates the process of combining text inputs with latent representations to generate conditioned output. It masks and composites the latent space based on text conditions, enabling the creation of customized results.

# Input types
## Required
- pipe
    - The pipe parameter serves as the primary data and settings source for node operation. It is essential for the node's proper functioning, as it contains the necessary information required for the node to execute tasks and generate the desired output.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- text_combine
    - This parameter holds the list of text elements that are combined with latent data. It plays a significant role in shaping the final output, as it directly influences the conditioning process.
    - Comfy dtype: LIST
    - Python dtype: List[str]
- source_latent
    - The source_latent parameter is critical for node operation, as it provides the initial latent representation that will be composited and conditioned.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- source_mask
    - This parameter is essential for the masking process, as it determines how latent data is conditioned. It influences the final output by controlling which regions of the latent space are modified.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- destination_mask
    - The destination_mask parameter plays a key role in defining the regions of the latent space that will be updated. It works in conjunction with the source mask to refine the final composited latent representation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- text_combine_mode
    - This parameter determines how text is combined with existing prompts, influencing the conditioning process and the final output. It is critical for controlling how the node processes text inputs.
    - Comfy dtype: COMBO[add, replace, cover]
    - Python dtype: str
## Optional
- replace_text
    - The replace_text parameter allows modification of specific text within prompts. It is important for customizing the conditioning process without altering the overall prompt structure.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt parameter provides additional text context that can be used to further refine the conditioning process. It is beneficial for adding specific nuances to the final output.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - This parameter contains supplementary image-related information that can be leveraged to enhance the conditioning process. It is particularly useful for incorporating visual elements into the final output.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Any
- my_unique_id
    - The my_unique_id parameter is used to track and identify specific instances of node operations. It is important for maintaining process integrity and ensuring accurate results.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The pipe output is an updated version of the input pipe, now containing the latest samples and modified loader settings. It is important as it represents the pipeline's progression and the integration of node processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- latent
    - The latent output represents the composited and conditioned latent space. It is critical as it is the direct result of node operation and serves as the foundation for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- conditioning
    - The conditioning output is a set of conditions that have been applied to the latent space. It is important for understanding how the node processes inputs and ensuring that desired features are present in the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
