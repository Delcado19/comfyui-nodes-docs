# Lora Loader 🐍
## Documentation
- Class name: LoraLoader|pysssss
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/pythongosssss/ComfyUI-Custom-Scripts

This node is specifically designed to load and apply LoRA (Low-Rank Adaptation) adjustments to both the model and CLIP, enhancing its functionality or altering its behavior according to the specified LoRA configuration. It extends the capabilities of the base loader and also handles image-specific LoRA configurations, making it versatile for various multimedia applications.

## Input types
### Required
- model
    - The model to which LoRA adjustments will be applied. It is essential for defining the base architecture that will be enhanced or modified via LoRA.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The CLIP model to which LoRA adjustments will be applied, allowing enhanced or altered multimodal understanding and representation.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- lora_name
    - Specifies the name of the LoRA configuration to be applied, determining the specific adjustments and enhancements for the model and CLIP.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - Defines the strength of the LoRA adjustments applied to the model, allowing fine-grained control over the modifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - Defines the strength of the LoRA adjustments applied to the CLIP model, enabling precise control over the enhancements.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- model
    - Comfy dtype: MODEL
    - The model with LoRA adjustments applied, reflecting the enhanced or altered functionality.
    - Python dtype: torch.nn.Module
- clip
    - Comfy dtype: CLIP
    - The CLIP model with LoRA adjustments applied, demonstrating enhanced or altered multimodal understanding and representation.
    - Python dtype: torch.nn.Module

## Usage tips
- Infra type: GPU
<!-- - Common nodes:
    - [LoraLoader|pysssss](../../ComfyUI-Custom-Scripts/Nodes/LoraLoader|pysssss.md)
    - [ModelSamplingDiscrete](../../Comfy/Nodes/ModelSamplingDiscrete.md)
    - Reroute
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)
    - IPAdapterApply
    - [Anything Everywhere](../../cg-use-everywhere/Nodes/Anything Everywhere.md) -->

## Source code
[View source repository on GitHub](https://github.com/pythongosssss/ComfyUI-Custom-Scripts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
