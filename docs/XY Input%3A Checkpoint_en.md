
# Documentation
- Class name: XY Input: Checkpoint
- Category: Efficiency Nodes/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

TSC_XYplot_Checkpoint node is specifically used to process XY plot data related to model checkpoints. It primarily focuses on validating and processing checkpoint values and clip skip values for efficiency analysis during model training and optimization.

# Input types
## Required
- target_ckpt
    - Specify the target checkpoint type, which can be 'Base' or 'Refiner', used to determine the context of XY plot data processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- input_mode
    - Determine the input mode, affecting how checkpoint data is processed and visualized in the XY plot.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_path
    - The batch data file path used to generate the XY plot, affecting the source of data analysis.
    - Comfy dtype: STRING
    - Python dtype: str
- subdirectories
    - Boolean value, indicating whether to include subdirectories in the batch data search, expanding the scope of data analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- batch_sort
    - Specify the sort order of the batch data, which can be 'ascending' or 'descending', used to organize the analysis data.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_max
    - Define the maximum number of batches to consider for the XY plot, setting an upper limit for data analysis.
    - Comfy dtype: INT
    - Python dtype: int
- ckpt_count
    - Indicates the number of checkpoints to include in the analysis, directly affecting the comprehensiveness of the XY plot.
    - Comfy dtype: INT
    - Python dtype: int
- ckpt_name_i
    - Specify the name of the i-th checkpoint, allowing detailed customization of the checkpoint data included in the XY plot.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clip_skip_i
    - Determine the clip skip value of the i-th checkpoint, affecting the granularity of data analysis for each checkpoint.
    - Comfy dtype: INT
    - Python dtype: int
- vae_name_i
    - Identify the name of the i-th VAE model, enabling the inclusion of VAE-specific data in the XY plot analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- X or Y
    - Output the generated XY plot data type ('Clip Skip' or 'Clip Skip (Refiner)') and the corresponding value, useful for efficiency analysis.
    - Comfy dtype: XY
    - Python dtype: Tuple[str, List[int]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
