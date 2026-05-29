# Documentation
- Class name: FromDetailerPipe_v2
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The FromDetailerPipe_v2 node is designed to coordinate the flow of information and resources in complex processing pipelines. It serves as a conduit for various components such as models, detectors, and hooks, ensuring they are properly integrated and utilized within the system. This node plays a critical role in streamlining operations and improving the overall efficiency of the pipeline.

# Input types
## Required
- detailer_pipe
    - The detailer_pipe parameter is crucial because it encapsulates the core components required for the node's operation. It acts as a pipeline, providing the node with the necessary data and configuration for processing. Proper handling of this parameter is essential for the node to function effectively and achieve its intended purpose.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]

# Output types
- detailer_pipe
    - The output detailer_pipe is a critical element that encapsulates the processed data and configuration, ready to be passed to subsequent stages of the pipeline. It represents the result of the node's processing and is essential for maintaining the continuity and integrity of the workflow.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[Any, ...]
- model
    - The model output represents the machine learning or statistical model used in the pipeline. It is a fundamental component that contributes to the system's analytical capabilities, enabling predictions, classifications, or other inferences based on input data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip output represents a segment or portion of data extracted for specific analysis or processing. It is an important element in the node's operation, often used in focused tasks that require a subset of the complete data.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- vae
    - The vae output refers to a Variational Autoencoder, a type of neural network capable of learning and encoding data into low-dimensional representations. It plays a significant role in the node's functionality by providing an efficient means of compressing and decompressing information.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive
    - The positive output represents a set of positive conditions or factors that influence the node's processing. It is used to guide the node in generating or identifying desired outcomes within the system.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative output represents a set of negative conditions or factors considered during the node's operation. It helps refine the node's decision-making process by providing a contrast to the positive conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- bbox_detector
    - The bbox_detector output is responsible for identifying and locating regions of interest in images or datasets. It is a critical component for tasks requiring object detection or spatial awareness.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- sam_model_opt
    - The sam_model_opt output refers to an optional instance of a sample model, potentially used for sampling or generating data points within the pipeline. It adds flexibility to the node's capabilities by allowing the incorporation of sampling techniques.
    - Comfy dtype: SAM_MODEL
    - Python dtype: Optional[torch.nn.Module]
- segm_detector_opt
    - The segm_detector_opt output is an optional component specifically designed for segmenting parts of images or data for further analysis. It enhances the node's functionality by enabling more granular processing of visual or structured data.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: Optional[torch.nn.Module]
- detailer_hook
    - The detailer_hook output is a customizable hook that allows additional functionality or extensions to be integrated into the node. It provides a way to tailor the node's behavior according to specific use cases or requirements.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Callable[..., Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
