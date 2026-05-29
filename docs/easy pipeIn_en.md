# Documentation
- Class name: pipeIn
- Category: EasyUse/Pipe
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The pipeIn node serves as the central conduit of the data flow, facilitating the transition and transformation of information within the pipeline. It aims to simplify the data processing workflow by integrating various inputs and managing their routing within the system. The node’s primary function is to ensure that necessary components are effectively passed along, allowing subsequent operations to execute as intended.

# Input types
## Required
- pipe
- The pipe parameter is crucial because it represents the main source of data and instructions for the pipeIn node. It contains all necessary elements such as the model, conditional data, and other related information that determine the node’s operation and outcome.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
## Optional
- model
- The model parameter is essential because it defines the core algorithm or neural network architecture used in the pipeIn node’s processing. This is vital for the node’s correct functioning and for producing accurate results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- pos
- Positive conditional data, called 'pos', plays a critical role in guiding the behavior of the pipeIn node. It provides the model with the necessary context to generate or process data as expected.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- neg
- Negative conditional data, or 'neg', is equally important because it sets boundaries for the model’s output. It helps the node refine its operation and ensures that results align with expectations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent
- The latent parameter is key when handling unobserved or latent data. It allows the pipeIn node to incorporate hidden variables into its processing, which can significantly influence the final output.
    - Comfy dtype: LATENT
    - Python dtype: Any
- vae
- The vae parameter is essential for the node’s encoding and decoding functions. It represents the variational autoencoder model, which is necessary for tasks related to data compression and generation performed by the pipeIn node.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- clip
- The clip parameter is important when the pipeIn node needs to align generated data with specific context or content. It integrates the CLIP model, which is crucial for understanding and generating images or text that match a given description.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- image
- The image parameter is indispensable when the pipeIn node deals with visual data processing. It carries the visual information that the node will operate on or analyze to achieve the desired result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- xyplot
- The xyplot parameter defines the plotting settings for the pipeIn node. It is important for the visual representation and analysis of data, allowing the node to produce meaningful visualizations that aid in understanding data structure and trends.
    - Comfy dtype: XYPLOT
    - Python dtype: Any
- my_unique_id
- The my_unique_id parameter is the unique identifier for an instance of the pipeIn node. It is important for tracking and managing nodes in complex systems, ensuring that each instance can be monitored and controlled individually.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
- The output pipe is the refined and structured dataset processed by the pipeIn node. It encapsulates the results and any modifications made during the node’s execution, serving as the foundation for further operations or analysis within the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class pipeIn:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'pipe': ('PIPE_LINE',), 'model': ('MODEL',), 'pos': ('CONDITIONING',), 'neg': ('CONDITIONING',), 'latent': ('LATENT',), 'vae': ('VAE',), 'clip': ('CLIP',), 'image': ('IMAGE',), 'xyPlot': ('XYPLOT',)}, 'hidden': {'my_unique_id': 'UNIQUE_ID'}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('pipe',)
    FUNCTION = 'flush'
    CATEGORY = 'EasyUse/Pipe'

    def flush(self, pipe=None, model=None, pos=None, neg=None, latent=None, vae=None, clip=None, image=None, xyplot=None, my_unique_id=None):
        model = model if model is not None else pipe.get('model')
        if model is None:
            log_node_warn(f'pipeIn[{my_unique_id}]', 'Model missing from pipeLine')
        pos = pos if pos is not None else pipe.get('positive')
        if pos is None:
            log_node_warn(f'pipeIn[{my_unique_id}]', 'Pos Conditioning missing from pipeLine')
        neg = neg if neg is not None else pipe.get('negative')
        if neg is None:
            log_node_warn(f'pipeIn[{my_unique_id}]', 'Neg Conditioning missing from pipeLine')
        vae = vae if vae is not None else pipe.get('vae')
        if vae is None:
            log_node_warn(f'pipeIn[{my_unique_id}]', 'VAE missing from pipeLine')
        clip = clip if clip is not None else pipe.get('clip')
        if clip is None:
            log_node_warn(f'pipeIn[{my_unique_id}]', 'Clip missing from pipeLine')
        if latent is not None:
            samples = latent
        elif image is None:
            samples = pipe.get('samples') if pipe is not None else None
            image = pipe.get('images') if pipe is not None else None
        elif image is not None:
            if pipe is None:
                batch_size = 1
            else:
                batch_size = pipe['loader_settings']['batch_size'] if 'batch_size' in pipe['loader_settings'] else 1
            samples = {'samples': vae.encode(image[:, :, :, :3])}
            samples = RepeatLatentBatch().repeat(samples, batch_size)[0]
        if pipe is None:
            pipe = {'loader_settings': {'positive': '', 'negative': '', 'xyplot': None}}
        xyplot = xyplot if xyplot is not None else pipe['loader_settings']['xyplot'] if xyplot in pipe['loader_settings'] else None
        new_pipe = {**pipe, 'model': model, 'positive': pos, 'negative': neg, 'vae': vae, 'clip': clip, 'samples': samples, 'images': image, 'seed': pipe.get('seed') if pipe is not None and 'seed' in pipe else None, 'loader_settings': {**pipe['loader_settings'], 'xyplot': xyplot}}
        del pipe
        return (new_pipe,)
```