# Documentation
- Class name: AdvancedCLIPTextEncode
- Category: conditioning/advanced
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb

The AdvancedCLIPTextEncode node is designed to process and encode text input into a form that can be used for advanced conditional tasks. It leverages the capabilities of the CLIP model to generate embeddings that capture semantic properties of the text. This node is particularly suitable for applications that require a deeper understanding of the input text, such as generative models or natural language processing tasks that need a deeper understanding of the input text.

# Input types
## Required
- text
    - The 'text' parameter is the main input of the node, representing the text to be encoded. It should be a string and can contain multiple lines of text, allowing processing of more complex and longer text inputs. This parameter is crucial because the quality of the encoding largely depends on the accuracy and richness of the provided text.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The 'clip' parameter specifies the CLIP model to use for text encoding. It is a required input because the node relies on the architecture and capabilities of the CLIP model to generate meaningful embeddings from the text input.
    - Comfy dtype: CLIP
    - Python dtype: Any
- token_normalization
    - The 'token_normalization' parameter determines how tokens in the text are normalized before encoding. It can take different strategies such as 'none', 'mean', 'length', or 'length+mean', which affect the distribution and scale of token embeddings. This parameter is important for controlling variance in embeddings and can affect conditioning performance.
    - Comfy dtype: COMBO[none, mean, length, length+mean]
    - Python dtype: str
- weight_interpretation
    - The 'weight_interpretation' parameter affects how token weights are interpreted during encoding. It offers various options such as 'comfy', 'A1111', 'compel', 'comfy++', or 'down_weight', each of which may lead to different emphasis on certain aspects of the text. This parameter is essential for fine-tuning the encoding to meet the specific requirements of downstream tasks.
    - Comfy dtype: COMBO[comfy, A1111, compel, comfy++, down_weight]
    - Python dtype: str
## Optional
- affect_pooled
    - The 'affect_pooled' parameter is an optional input that controls whether the pooled output of the CLIP model should be affected by the encoding process. It accepts values of 'enable' or 'disable', which determine whether the pooled output is included in the final embedding.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
    - The output of the AdvancedCLIPTextEncode node is a tensor representing the encoded text. This tensor is used as conditional input for further processing or generation tasks. It contains semantic information extracted from the text, providing a rich and detailed representation that can guide subsequent steps in the workflow.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_ADV_CLIP_emb)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
