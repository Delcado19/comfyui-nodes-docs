# Documentation
- Class name: IPAdapterCombineWeights
- Category: ipadapter/weights
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterCombineWeights node supports weight scheduling, allowing users to adjust the influence of images across different time periods, achieving smooth transitions and animation effects. This method is lighter and more efficient than using gradient masks.

# Output types
- weights
    - The weights output represents the result of applying the specified method to the input weights. It contains the essence of the node's purpose, providing a synthesized form of the input data that can be used for further analysis or model training.
    - Comfy dtype: FLOAT
    - Python dtype: float
- count
    - The count output represents the number of input weights. It is an important attribute of the node, used to describe the scale and scope of the input data.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
