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
```
class CreateAudioMask:

    def __init__(self):
        try:
            import librosa
            self.librosa = librosa
        except ImportError:
            print("Can not import librosa. Install it with 'pip install librosa'")
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'createaudiomask'
    CATEGORY = 'KJNodes/deprecated'

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'invert': ('BOOLEAN', {'default': False}), 'frames': ('INT', {'default': 16, 'min': 1, 'max': 255, 'step': 1}), 'scale': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 2.0, 'step': 0.01}), 'audio_path': ('STRING', {'default': 'audio.wav'}), 'width': ('INT', {'default': 256, 'min': 16, 'max': 4096, 'step': 1}), 'height': ('INT', {'default': 256, 'min': 16, 'max': 4096, 'step': 1})}}

    def createaudiomask(self, frames, width, height, invert, audio_path, scale):
        batch_size = frames
        out = []
        masks = []
        if audio_path == 'audio.wav':
            audio_path = os.path.join(script_directory, audio_path)
        (audio, sr) = self.librosa.load(audio_path)
        spectrogram = np.abs(self.librosa.stft(audio))
        for i in range(batch_size):
            image = Image.new('RGB', (width, height), 'black')
            draw = ImageDraw.Draw(image)
            frame = spectrogram[:, i]
            circle_radius = int(height * np.mean(frame))
            circle_radius *= scale
            circle_center = (width // 2, height // 2)
            draw.ellipse([(circle_center[0] - circle_radius, circle_center[1] - circle_radius), (circle_center[0] + circle_radius, circle_center[1] + circle_radius)], fill='white')
            image = np.array(image).astype(np.float32) / 255.0
            image = torch.from_numpy(image)[None,]
            mask = image[:, :, :, 0]
            masks.append(mask)
            out.append(image)
        if invert:
            return (1.0 - torch.cat(out, dim=0),)
        return (torch.cat(out, dim=0), torch.cat(masks, dim=0))
```