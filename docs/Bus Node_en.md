# Documentation
- Class name: WAS_Bus
- Category: WAS Suite/Utilities
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Bus node serves as the central hub in the WAS suite for managing and coordinating various components. It ensures efficient transfer of models, clips, and other utilities across different parts of the system, facilitating a seamless workflow.

# Input types
## Optional
- bus
    - The "bus" parameter acts as a container holding optional elements such as model, clip, vae, positive, and negative. It is essential to the node's operation, as it allows bundling related components, improving data transfer efficiency within the system.
    - Comfy dtype: TUPLE[None, None, None, None, None]
    - Python dtype: Tuple[Optional[Any], Optional[Any], Optional[Any], Optional[Any], Optional[Any]]
- model
    - The "model" parameter is critical to the node's functionality, as it represents the core machine learning component. It is used to process and analyze data, and its presence is essential for the node to successfully execute its tasks.
    - Comfy dtype: MODEL
    - Python dtype: Optional[torch.nn.Module]
- clip
    - The "clip" parameter is important as it involves the multimedia aspect of the node's operation. It is essential for handling and managing video or audio clips, which are often a critical part of the processing pipeline.
    - Comfy dtype: CLIP
    - Python dtype: Optional[Any]
- vae
    - The "vae" parameter is essential to the node's ability to perform advanced data processing tasks. It represents a generative model, crucial for creating and manipulating data representations.
    - Comfy dtype: VAE
    - Python dtype: Optional[Any]
- positive
    - The "positive" parameter plays a vital role in the node's conditional processing capability. It provides guidance on desired outcomes, steering the node's operation toward achieving specific results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Any]
- negative
    - The "negative" parameter is key to the node's ability to filter out unwanted elements or results. It helps refine the node's processing by specifying what should be avoided or excluded from the operation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[Any]

# Output types
- bus
    - The "bus" output encapsulates the processed components, providing a structured way to access the model, clip, vae, and conditional elements. It is important as it allows organized retrieval and further use of these components.
    - Comfy dtype: TUPLE[MODEL, CLIP, VAE, CONDITIONING, CONDITIONING]
    - Python dtype: Tuple[torch.nn.Module, Any, Any, Any, Any]
- model
    - The "model" output is the processed machine learning component, ready for further analysis or use in subsequent tasks. It is a key element of the node's output, as it carries the computational intelligence derived from the input data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The "clip" output represents multimedia data that has been processed or enhanced by the node. It is important for applications requiring audio or video manipulation and analysis.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - The "vae" output is the generative model used during the node's operation. It is important for generating new data instances or performing data augmentation tasks.
    - Comfy dtype: VAE
    - Python dtype: Any
- positive
    - The "positive" output reflects the guidance used to steer the node toward desired results. It is essential for applications requiring conditional processing based on specific criteria.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The "negative" output represents elements filtered out or excluded based on the node's operation. It is important for applications involving removal or avoidance of certain data points.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Bus:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {}, 'optional': {'bus': ('BUS',), 'model': ('MODEL',), 'clip': ('CLIP',), 'vae': ('VAE',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',)}}
    RETURN_TYPES = ('BUS', 'MODEL', 'CLIP', 'VAE', 'CONDITIONING', 'CONDITIONING')
    RETURN_NAMES = ('bus', 'model', 'clip', 'vae', 'positive', 'negative')
    FUNCTION = 'bus_fn'
    CATEGORY = 'WAS Suite/Utilities'

    def bus_fn(self, bus=(None, None, None, None, None), model=None, clip=None, vae=None, positive=None, negative=None):
        (bus_model, bus_clip, bus_vae, bus_positive, bus_negative) = bus
        out_model = model or bus_model
        out_clip = clip or bus_clip
        out_vae = vae or bus_vae
        out_positive = positive or bus_positive
        out_negative = negative or bus_negative
        out_bus = (out_model, out_clip, out_vae, out_positive, out_negative)
        if not out_model:
            raise ValueError('Either model or bus containing a model should be supplied')
        if not out_clip:
            raise ValueError('Either clip or bus containing a clip should be supplied')
        if not out_vae:
            raise ValueError('Either vae or bus containing a vae should be supplied')
        return (out_bus, out_model, out_clip, out_vae, out_positive, out_negative)
```