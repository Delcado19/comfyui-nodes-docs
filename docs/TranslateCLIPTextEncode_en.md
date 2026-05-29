# Documentation
- Class name: TranslateCLIPTextEncode
- Category: translate
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

TranslateCLIPTextEncode node acts as an intermediary that encodes text data into a format understandable by machine learning models (especially those using the CLIP framework). It does this by translating input text into language suitable for the model and then tokenizing the translated text. The node's main function is to prepare data for subsequent AI model processing, emphasizing seamless integration of language translation and model encoding.

# Input types
## Required
- text
    - The `text` parameter is the raw text input that the node will process. It is crucial because it is the source information to be encoded for model use. The node relies on this input to perform its translation and encoding tasks, making it a fundamental component of node operation.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The `clip` parameter represents the CLIP model or its interface that the node will use for tokenization and encoding. It is an important component because it directly affects the node's ability to convert text into a format suitable for machine‑learning applications.
    - Comfy dtype: CLIP
    - Python dtype: Any
- app_id
    - The `app_id` parameter is the identifier used for authentication when using external translation services. It is not required, but it is important for accessing certain services and ensuring the integrity and security of the translation process.
    - Comfy dtype: STRING
    - Python dtype: str
- app_key
    - The `app_key` parameter serves as a secret key used together with `app_id` for authentication. It is not mandatory, but it plays a key role in ensuring secure access to translation services.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- CONDITIONING
    - The `CONDITIONING` output is a structured representation of the encoded text data, including the CLIP model's conditioning vector and pooled output. This output is important because it provides processed information ready for downstream machine‑learning tasks.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]}}

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
