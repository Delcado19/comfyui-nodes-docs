# Documentation
- Class name: EditDetailerPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

EditDetailerPipe is a node designed to enhance text detail levels by integrating various models and components. It allows customization of the text generation process through the use of LoRA and wildcards, with further refinement via optional parameters such as model, clip, and VAE. The primary goal of this node is to provide a flexible and detailed text editing framework that can be adjusted according to specific requirements.

# Input types
## Required
- detailer_pipe
    - The detailer_pipe parameter is critical for the operation of the EditDetailerPipe node, as it represents the initial configuration or state of the text editing pipeline. It is through this parameter that the node receives the foundational components needed for further processing and customization.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]
- wildcard
    - The wildcard parameter plays a key role in the text editing process, allowing the insertion of dynamic text elements. Its multiline and dynamicPrompts attributes indicate the flexibility and interactivity of the text that can be generated, making it a crucial component for achieving the desired level of detail.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- Select to add LoRA
    - The LoRA selection parameter enables users to choose a specific LoRA model to enhance the detail and nuance of the text. This selection can significantly impact the richness and depth of the generated text, making it an important aspect of the customization process.
    - Comfy dtype: COMBO[Select the LoRA to add to the text]
    - Python dtype: str
- Select to add Wildcard
    - This parameter allows the selection of wildcards to be included in the text, providing a mechanism for introducing variability and unpredictability in the text generation process. The choice of wildcards can greatly influence the final result, making it an important factor in the node's operation.
    - Comfy dtype: COMBO[Select the Wildcard to add to the text]
    - Python dtype: str
- model
    - The model parameter is an optional input that can be used to specify a particular model in the text editing process. This allows tailoring the node's functionality to the specific requirements of the task at hand.
    - Comfy dtype: MODEL
    - Python dtype: Any
- clip
    - The clip parameter is another optional input that can be used to introduce a specific CLIP model into the text editing pipeline. This can alter how the text is processed and detailed, providing additional control over the node's output.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - The vae parameter provides an optional way to include a Variational Autoencoder (VAE) in the text editing process. This can introduce a level of abstraction and representation learning into the node's operation, potentially improving the quality of the generated text.
    - Comfy dtype: VAE
    - Python dtype: Any
- positive
    - The positive parameter is used to specify positive conditioning input, guiding the text generation process towards the desired outcome. This is particularly useful for directing the node's behavior to generate text with specific characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter is used to define negative conditioning input, preventing the generation of certain text features. This helps refine the node's output by filtering out unwanted elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- bbox_detector
    - The bbox_detector parameter is an optional component that can be integrated into the node to perform bounding box detection, which is useful for applications involving spatial or geometric text analysis.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: Any
- sam_model
    - The sam_model parameter allows the inclusion of a SAM (Score-based Adversarial Model), which can be used to guide the text generation process towards more coherent and contextually relevant output.
    - Comfy dtype: SAM_MODEL
    - Python dtype: Any
- segm_detector
    - The segm_detector parameter is an optional input for incorporating a segmentation detector into the node, which can assist in identifying and separating different parts or components of the text.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: Any
- detailer_hook
    - The detailer_hook parameter provides a way to customize the node's behavior, allowing the insertion of custom hooks or callbacks during the text editing process. This enables advanced users to implement specific functionalities or modifications.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Any
- refiner_model
    - The refiner_model parameter is an optional input that further refines the text editing process by specifying a secondary model. This is particularly useful for applications requiring multi-stage text enhancement.
    - Comfy dtype: REFINER_MODEL
    - Python dtype: Any
- refiner_clip
    - The refiner_clip parameter allows the optional integration of a secondary CLIP model to enhance the detail and coherence of the text. It provides users with an additional layer of control to fine-tune the node's output.
    - Comfy dtype: REFINER_CLIP
    - Python dtype: Any
- refiner_positive
    - The refiner_positive parameter is used to provide positive conditioning input for the secondary text refinement stage. This helps guide the node to produce text with desired attributes in a more focused manner.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- refiner_negative
    - The refiner_negative parameter is used to specify negative conditioning input for the secondary text refinement process. It helps avoid unwanted text features in the final stage of text editing.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Output types
- detailer_pipe
    - The output detailer_pipe represents the refined and customized text editing pipeline after processing through the EditDetailerPipe node. It encapsulates all modifications and enhancements made to the initial pipeline, providing a detailed and nuanced text generation framework.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
