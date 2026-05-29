# Documentation
- Class name: DecomposeSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DecomposeSEGS node aims to decompose complex SEGS data into more manageable components. Its purpose is to simplify the SEGS data structure for easy analysis and manipulation. This node plays an important role in the data preprocessing pipeline, ensuring that SEGS data is correctly decomposed for use in subsequent processing stages.

# Input types
## Required
- segs
    - The 'segs' parameter is critical for the DecomposeSEGS node because it represents the input data to be decomposed. This is a key component that directly affects the operation and output quality of the node.
    - Comfy dtype: SEGS
    - Python dtype: Type[impact.core.SEG]

# Output types
- SEGS_HEADER
    - The SEGS_HEADER output provides a structured representation of the header information extracted from the SEGS data. It is important for understanding the context and metadata associated with the SEGS data.
    - Comfy dtype: SEGS_HEADER
    - Python dtype: Dict[str, Any]
- SEG_ELT
    - The SEG_ELT output contains the decomposed elements of the SEGS data. It is a key output for further analysis and is crucial for downstream tasks that require detailed segment information.
    - Comfy dtype: SEG_ELT
    - Python dtype: List[impact.core.SEG]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
