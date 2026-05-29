# Documentation
- Class name: smZ_CLIPTextEncode
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI_smZNodes.git

The smZ_CLIPTextEncode node is designed to process text input and convert it into a structured representation suitable for further computational tasks. It leverages the power of the CLIP model to understand and generate text embeddings, which are essential for various AI-driven applications. This node abstracts the complexity of text encoding, allowing users to focus on the broader goals of their projects rather than the intricacies of text processing.

# Input types
## Required
- text
    - The text parameter is crucial as it provides the raw text data for the node to process. It forms the foundation for the entire encoding operation, and its content directly impacts the quality and relevance of the generated embeddings.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The clip parameter represents the CLIP model used by the node to encode the text. This is a critical element, as the model's capabilities and training directly influence the encoding process and the subsequent use of the embeddings.
    - Comfy dtype: CLIP
    - Python dtype: comfy.sd.CLIP
- parser
    - The parser parameter is essential for determining how the text will be interpreted and processed by the node. It affects the granularity and structure of the text representation, which is vital for the accuracy and effectiveness of the encoding.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- CONDITIONING
    - The output of the smZ_CLIPTextEncode node is a set of conditioning data derived from the encoded text. This data is significant as it can be used to guide and refine subsequent AI models or tasks, providing them with the necessary context and structure.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/shiimizu/ComfyUI_smZNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
