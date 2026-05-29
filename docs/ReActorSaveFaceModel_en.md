# Documentation
- Class name: SaveFaceModel
- Category: 🌌 ReActor
- Output node: True
- Repo Ref: https://github.com/Gourieff/comfyui-reactor-node.git

This node is designed to store facial recognition models, encapsulating the process of converting image data into a structured format usable for further analysis or identification. It emphasizes preserving facial attributes and features for future use without delving into the specifics of underlying algorithms or data structures.

# Input types
## Required
- save_mode
- This parameter determines whether to save the model, acting as a switch for the entire save process. It plays a key role in defining the node's output and the subsequent actions the system takes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- face_model_name
- The name assigned to the facial model serves as an identifier for the saved model, enabling easy retrieval and reference in future operations. It is essential for maintaining organization and clarity within the model inventory.
    - Comfy dtype: STRING
    - Python dtype: str
- select_face_index
- This index selects a specific face from the analysis data, guiding the node to focus on particular facial features of the model. It plays an important role in targeting specific data within a larger dataset.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image
- The input image provides the visual data required for facial analysis and model creation. Its quality and resolution directly affect the accuracy and detail of the generated facial model.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- face_model
- The facial model input is optional; if provided, it allows the node to bypass the facial analysis step and directly save the given model. This simplifies the process when a pre‑analyzed model is available.
    - Comfy dtype: FACE_MODEL
    - Python dtype: insightface.Face

# Output types
- face_model_name
- The output reflects the name of the saved facial model, indicating successful completion of the save process. It serves as confirmation and reference for future interactions with the saved model.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Gourieff/comfyui-reactor-node)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
