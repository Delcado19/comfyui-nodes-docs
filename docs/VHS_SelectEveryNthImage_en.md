# Documentation
- Class name: SelectEveryNthImage
- Category: Video Helper Suite 🎥🅥🅗🅢/image
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The `select_images` method of the SelectEveryNthImage node efficiently selects and retrieves a subset from a larger image collection. It selects every nth image specified by the user, creating a reduced sequence preserving original order. This is useful for scenarios needing a representative reduced set without processing the entire dataset.

# Input types
## Required
- images
    - “images”参数是节点将处理的图像数据集合。它是节点操作的基本，因为它代表了要从中选择图像的输入数据集。节点的执行和结果输出严重依赖于此参数的内容和结构。
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- select_every_nth
    - “select_every_nth”参数决定了从输入集合中选择图像的频率。它是节点操作中的一个关键决定因素，因为它直接影响着输出中返回的图像数量。该参数确保了选择过程是系统性的和可预测的，基于指定的间隔。
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - “IMAGE”输出由输入集合中选定的图像子集组成。这个输出非常重要，因为它代表了节点操作的直接结果，为用户提供了基于指定选择标准的精选图像序列。
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- count
    - “count”输出提供了从输入集合中选择的图像总数。这个信息对用户来说很有价值，因为它有助于理解选择过程的范围，并在原始数据集的背景下评估输出。
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
