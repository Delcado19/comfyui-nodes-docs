# Documentation
- Class name: NodeFrame
- Category: FizzNodes 📅🅕🅝/FrameNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The NodeFrame class is designed to manage and create frames within structured data flows. It facilitates the integration of text inputs with existing frames, generating new frames that contain both positive and negative textual sentiments. This node plays a critical role in shaping the narrative flow of data through the system by combining and contrasting different textual perspectives.

# Input types
## Required
- frame
    - The 'frame' parameter is critical because it identifies the specific frame within the data structure that the node will operate on. It ensures the correct frame is located for manipulation or data retrieval, thereby maintaining the integrity and order of the data flow.
    - Comfy dtype: INT
    - Python dtype: int
- previous_frame
    - The 'previous_frame' parameter is required because it provides the context of the previous frame, which the node uses to build upon. This is a mandatory input that ensures continuity and consistency in the frame creation process.
    - Comfy dtype: FIZZFRAME
    - Python dtype: NodeFrame
- positive_text
    - The 'positive_text' parameter is a key element for introducing positive sentiment into the frame creation process. It allows the expression of optimistic or affirmative viewpoints, enriching the narrative with a constructive perspective.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- negative_text
    - The 'negative_text' parameter, while optional, is used to introduce contrasting viewpoints into the frame by including potential criticisms or drawbacks alongside positive sentiment, providing a balanced perspective.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- FIZZFRAME
    - The 'FIZZFRAME' output represents the newly created frame, which contains the integrated positive and negative textual sentiments. This is a significant output as it lays the foundation for subsequent data processing and analysis.
    - Comfy dtype: FIZZFRAME
    - Python dtype: NodeFrame
- CONDITIONING
    - The 'CONDITIONING' output provides encoded representations of the positive and negative text, which are essential for further processing within the system. These conditioning outputs allow data to be manipulated and refined based on the text inputs.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Union[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
