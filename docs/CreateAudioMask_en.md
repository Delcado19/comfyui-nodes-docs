# Documentation
- Class name: CreateAudioMask
- Category: KJNodes/deprecated
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CreateAudioMask node is designed to convert audio signals into a visual representation, specifically creating masks corresponding to the frequency content of the audio. It uses the librosa library to generate a spectrogram from an audio file, then visualizes that spectrogram as a series of circles whose sizes are proportional to the amplitude of the audio at different frequencies. This node contributes to the audio-to-visual conversion process by providing a way to visualize the evolution of audio frequencies over time.

# Input types
## Required
- invert
    - The 'invert' parameter determines whether the generated mask should be color-inverted. This can be critical in applications where contrast between the mask and background is essential.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frames
    - The 'frames' parameter specifies the number of frames processed from the audio file. It is crucial for controlling the temporal resolution of the audio-to-visual conversion.
    - Comfy dtype: INT
    - Python dtype: int
- scale
    - The 'scale' parameter adjusts the size of the circles in the generated mask, proportional to the average amplitude of the audio frames. It plays a vital role in the visual representation of the audio frequency content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- audio_path
    - The 'audio_path' parameter defines the path to the audio file used to generate the mask. It is a critical input as it directly affects the content and quality of the generated mask.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The 'width' parameter sets the width of the output image in pixels. It is an important parameter for defining the spatial dimensions of the visual representation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter sets the height of the output image in pixels. It works in conjunction with the 'width' parameter to determine the overall shape of the visual representation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - 'output_image' is the visual representation of the audio data, generated as a result of the audio-to-visual conversion process. It encapsulates the temporal and frequency characteristics of the audio in a single image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The 'mask' output provides a binary representation of the audio frequency content, highlighting regions of significant amplitude in the audio signal.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
