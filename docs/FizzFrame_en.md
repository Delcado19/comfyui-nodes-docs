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
```
class NodeFrame:

    def __init__(self):
        self.frames = {}
        self.thisFrame = {}

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'frame': ('INT', {'default': 0, 'min': 0}), 'previous_frame': ('FIZZFRAME', {'forceInput': True}), 'positive_text': ('STRING', {'multiline': True})}, 'optional': {'negative_text': ('STRING', {'multiline': True})}}
    RETURN_TYPES = ('FIZZFRAME', 'CONDITIONING', 'CONDITIONING')
    FUNCTION = 'create_frame'
    CATEGORY = 'FizzNodes 📅🅕🅝/FrameNodes'

    def create_frame(self, frame, previous_frame, positive_text, negative_text=None):
        self.frames = previous_frame.frames
        prev_frame = previous_frame.thisFrame
        new_positive_text = f"{positive_text}, {prev_frame['general_positive']}"
        new_negative_text = f"{negative_text}, {prev_frame['general_negative']}"
        pos_tokens = prev_frame['clip'].tokenize(new_positive_text)
        (pos_cond, pos_pooled) = prev_frame['clip'].encode_from_tokens(pos_tokens, return_pooled=True)
        neg_tokens = prev_frame['clip'].tokenize(new_negative_text)
        (neg_cond, neg_pooled) = prev_frame['clip'].encode_from_tokens(neg_tokens, return_pooled=True)
        new_frame = {'positive_text': positive_text, 'negative_text': negative_text, 'general_positive': prev_frame['general_positive'], 'general_negative': prev_frame['general_negative'], 'clip': prev_frame['clip'], 'pos_conditioning': {'cond': pos_cond, 'pooled': pos_pooled}, 'neg_conditioning': {'cond': neg_cond, 'pooled': neg_pooled}}
        self.thisFrame = new_frame
        self.frames[frame] = new_frame
        return (self, [[pos_cond, {'pooled_output': pos_pooled}]], [[neg_cond, {'pooled_output': neg_pooled}]])
```