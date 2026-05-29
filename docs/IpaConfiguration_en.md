# Documentation
- Class name: IpaConfigurationNode
- Category: Steerable-Motion
- Output node: False
- Repo Ref: https://github.com/banodoco/steerable-motion

The IpaConfigurationNode class encapsulates the configuration logic for a node that manages parameters affecting the behavior of a controllable motion model. It processes inputs to fine-tune model performance based on user preferences, focusing on the balance between control and natural motion.

# Input types
## Required
- ipa_starts_at
    - The "ipa_starts_at" parameter specifies the starting point of the motion, which is critical for defining the initial conditions of the animation. It influences the overall trajectory and ensures the motion begins smoothly from the desired position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_ends_at
    - The "ipa_ends_at" parameter specifies the ending point of the motion, which is critical for determining the final state of the animation. It ensures the motion ends at the intended position, contributing to the coherence of the animation sequence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_weight_type
    - The "ipa_weight_type" parameter influences the weight distribution along the motion path, affecting the smoothness and visual appeal of the animation. It is a key factor in achieving natural transitions between different phases of motion.
    - Comfy dtype: ENUM
    - Python dtype: str
- ipa_weight
    - The "ipa_weight" parameter adjusts the overall impact of weight settings on the motion, which is important for fine-tuning the dynamics of the animation. It helps achieve the desired balance between different motion elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_embeds_scaling
    - The "ipa_embeds_scaling" parameter controls the scaling of embeddings used in the motion model, which is critical for adjusting the model's responsiveness to user input. It plays a significant role in the precision and adaptability of the motion.
    - Comfy dtype: ENUM
    - Python dtype: str
- ipa_noise_strength
    - The "ipa_noise_strength" parameter determines the intensity of noise applied to the motion, which can add realism and variation to the animation. It is an important aspect of creating more dynamic and unpredictable motion sequences.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_image_for_noise
    - The "use_image_for_noise" parameter enables the use of images as a noise source, which can introduce more complex and visually rich noise patterns into the animation. It enhances the diversity and aesthetic quality of the motion.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- type_of_noise
    - The "type_of_noise" parameter defines the type of noise to be applied, which significantly influences the visual characteristics and style of the animation. It is a key element in achieving the desired aesthetic and stylistic outcomes.
    - Comfy dtype: ENUM
    - Python dtype: str
- noise_blur
    - The "noise_blur" parameter adjusts the degree of blur applied to the noise, affecting the smoothness and coherence of noise patterns in the animation. It plays a role in defining the overall visual texture and quality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- configuration
    - The output 'configuration' is a set of processed and optimized parameters for the controllable motion model. It encapsulates all user-defined settings, ensuring the model operates according to the specified preferences.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/banodoco/steerable-motion)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
