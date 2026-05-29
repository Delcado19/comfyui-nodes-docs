# Documentation
- Class name: InitNodeFrame
- Category: FizzNodes 📅🅕🅝/FrameNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The `create_frame` method initializes and manages frames within a node. It builds a new frame by combining positive and negative text inputs with optional general sentiment and context from previous frames. The node's function focuses on creating a structured representation that encapsulates text data for further processing and analysis within the frame.

# Input types
## Required
- frame
- The `frame` parameter is essential for identifying the specific frame in node operations. It plays a key role in organizing and distinguishing different frames, thus affecting the node's execution and the structured representation it creates.
    - Comfy dtype: INT
    - Python dtype: int
- positive_text
- The `positive_text` parameter is a key component for defining the frame's positive sentiment. It significantly influences the node's ability to process and represent emotional content in the text, shaping the overall sentiment analysis outcome.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- negative_text
- Although the `negative_text` parameter is optional, it contributes to comprehensive sentiment analysis by providing negative context. It enriches the node's understanding of the sentiment spectrum and improves the accuracy of emotional representation.
    - Comfy dtype: STRING
    - Python dtype: str
- general_positive
- The `general_positive` parameter allows inclusion of general positive statements that can be associated with the frame. It adds depth to sentiment analysis by integrating broader positive sentiment into the frame's context.
    - Comfy dtype: STRING
    - Python dtype: str
- general_negative
- The `general_negative` parameter is used to include general negative sentiment that may affect the frame. It is important for providing a balanced view of sentiment, ensuring the node captures the full range of emotional expression.
    - Comfy dtype: STRING
    - Python dtype: str
- previous_frame
- The `previous_frame` parameter references a prior frame, allowing the node to inherit and build upon its context. It is crucial for maintaining continuity and consistency between frames during node operations.
    - Comfy dtype: FIZZFRAME
    - Python dtype: FIZZFRAME
- clip
- The `clip` parameter is vital for encoding text data into a tokenized format the node can process. It serves a tooling role in converting raw text into a structured representation for sentiment analysis.
    - Comfy dtype: CLIP
    - Python dtype: CLIP

# Output types
- FIZZFRAME
- The `FIZZFRAME` output provides the newly created frame along with its associated sentiment and context. It is important because it represents the result of the node operation, encapsulating structured data for further use.
    - Comfy dtype: FIZZFRAME
    - Python dtype: FIZZFRAME
- CONDITIONING
- The `CONDITIONING` output includes encoded positive and negative conditioning data derived from the text input. It is essential for sentiment analysis as it supplies the structured representation needed for downstream processing.
    - Comfy dtype: COMBO[torch.Tensor, Dict[str, torch.Tensor]]
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
```
class InitNodeFrame:

    def __init__(self):
        self.frames = {}
        self.thisFrame = {}

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'frame': ('INT', {'default': 0, 'min': 0}), 'positive_text': ('STRING', {'multiline': True})}, 'optional': {'negative_text': ('STRING', {'multiline': True}), 'general_positive': ('STRING', {'multiline': True}), 'general_negative': ('STRING', {'multiline': True}), 'previous_frame': ('FIZZFRAME', {'forceInput': True}), 'clip': ('CLIP',)}}
    RETURN_TYPES = ('FIZZFRAME', 'CONDITIONING', 'CONDITIONING')
    FUNCTION = 'create_frame'
    CATEGORY = 'FizzNodes 📅🅕🅝/FrameNodes'

    def create_frame(self, frame, positive_text, negative_text=None, general_positive=None, general_negative=None, previous_frame=None, clip=None):
        new_frame = {'positive_text': positive_text, 'negative_text': negative_text}
        if previous_frame:
            prev_frame = previous_frame.thisFrame
            new_frame['general_positive'] = prev_frame['general_positive']
            new_frame['general_negative'] = prev_frame['general_negative']
            new_frame['clip'] = prev_frame['clip']
            self.frames = previous_frame.frames
        if general_positive:
            new_frame['general_positive'] = general_positive
        if general_negative:
            new_frame['general_negative'] = general_negative
        new_positive_text = f"{positive_text}, {new_frame['general_positive']}"
        new_negative_text = f"{negative_text}, {new_frame['general_negative']}"
        if clip:
            new_frame['clip'] = clip
        pos_tokens = new_frame['clip'].tokenize(new_positive_text)
        (pos_cond, pos_pooled) = new_frame['clip'].encode_from_tokens(pos_tokens, return_pooled=True)
        new_frame['pos_conditioning'] = {'cond': pos_cond, 'pooled': pos_pooled}
        neg_tokens = new_frame['clip'].tokenize(new_negative_text)
        (neg_cond, neg_pooled) = new_frame['clip'].encode_from_tokens(neg_tokens, return_pooled=True)
        new_frame['neg_conditioning'] = {'cond': neg_cond, 'pooled': neg_pooled}
        self.frames[frame] = new_frame
        self.thisFrame = new_frame
        return (self, [[pos_cond, {'pooled_output': pos_pooled}]], [[neg_cond, {'pooled_output': neg_pooled}]])
```