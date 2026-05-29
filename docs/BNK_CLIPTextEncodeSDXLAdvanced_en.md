# Documentation
- Class name: AdvancedCLIPTextEncodeSDXL
- Category: conditioning/advanced
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb

The AdvancedCLIPTextEncodeSDXL node processes and encodes text input into a form usable for advanced conditioning tasks. It leverages the capabilities of SDXLClipModel to generate embeddings that capture the semantic information of the text. This node is especially suitable for applications requiring nuanced understanding of text content, such as natural language processing or content‑based filtering systems.

# Input types
## Required
- text_l
    - The `text_l` parameter is a string representing the primary text to encode. It is a key input because the semantic richness of the text directly affects the quality of the generated embeddings, which is critical for downstream tasks of the node.
    - Comfy dtype: STRING
    - Python dtype: str
- text_g
    - The `text_g` parameter serves as a secondary text input for the node. Used together with `text_l`, it provides a more comprehensive encoding while considering additional textual context. This parameter is essential for applications that benefit from broader textual nuances.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The `clip` parameter is an instance of SDXLClipModel used to perform text encoding. It is a mandatory input because the model is the core component that generates embeddings from the provided text.
    - Comfy dtype: CLIP
    - Python dtype: SDXLClipModel
## Optional
- token_normalization
    - The `token_normalization` parameter determines how token embeddings are normalized before being aggregated into the final embedding. It offers different strategies that can affect the distribution and importance of the generated embeddings, thereby influencing node performance in downstream tasks.
    - Comfy dtype: COMBO[none, mean, length, length+mean]
    - Python dtype: str
- weight_interpretation
    - The `weight_interpretation` parameter defines how weights associated with text tokens are interpreted during encoding. It can significantly alter the emphasis on different parts of the text, which is important for applications that require particular focus on text elements.
    - Comfy dtype: COMBO[comfy, A1111, compel, comfy++, down_weight]
    - Python dtype: str
- balance
    - The `balance` parameter adjusts the general‑to‑specific weighting of the text during encoding. It is a floating‑point value that allows fine‑tuning of the encoding to better match the requirements of the current application.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONDITIONING
    - The AdvancedCLIPTextEncodeSDXL node outputs a `CONDITIONING` object containing the encoded embeddings. This output is important because it forms the basis for advanced conditioning tasks, enabling more complex and context‑aware processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
