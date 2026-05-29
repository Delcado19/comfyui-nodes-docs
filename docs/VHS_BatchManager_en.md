# Documentation
- Class name: BatchManager
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The BatchManager node is designed to efficiently manage and organize frame batches for video processing tasks. It abstracts processing complexity by dividing large volumes of data into manageable batches, ensuring the processing pipeline remains efficient and smooth.

# Input types
## Required
- frames_per_batch
    - The 'frames_per_batch' parameter determines the number of frames to process in each batch. It is critical for controlling workload and memory usage, directly impacting the performance and efficiency of the video processing system.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prompt
    - The provided 'prompt' parameter contains additional instructions or context that may be needed for batch processing. It can influence how the BatchManager node interprets and processes input data.
    - Comfy dtype: PROMPT
    - Python dtype: str
- unique_id
    - The 'unique_id' parameter is used to identify a specific batch within the system, ensuring the processing can be accurately tracked and managed. It plays a vital role in maintaining the integrity and organization of the batch processing workflow.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- meta_batch
    - The 'meta_batch' output provides a structured representation of the processed batch. It encapsulates results and metadata, serving as a critical point for further analysis or downstream processing tasks.
    - Comfy dtype: VHS_BatchManager
    - Python dtype: BatchManager

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
