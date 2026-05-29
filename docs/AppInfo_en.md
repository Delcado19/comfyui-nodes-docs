# Documentation
- Class name: AppInfo
- Category: ♾️Mixlab
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

AppInfo is a node designed to manage and organize application information, facilitating the setup and execution of various applications within the system. It simplifies the input and output of application details, ensuring efficient handling of application data. Conceptually, this node focuses on providing a structured approach to application information management without being tied to specific implementation details.

# Input types
## Required
- name
    - The name parameter is critical for identifying the application within the system. It serves as a unique identifier, aiding in the organization and retrieval of data associated with the application. The name influences how the application is referenced and managed within the system.
    - Comfy dtype: STRING
    - Python dtype: str
- input_ids
    - Input IDs play a key role in tracking the components or modules of the application. They are essential for systematically analyzing and managing the structure of the application, ensuring each part is documented and accessible as needed.
    - Comfy dtype: STRING
    - Python dtype: str
- output_ids
    - Output IDs are crucial for mapping the results and outcomes of the application. They define the structure and format of output data, enabling effective monitoring and utilization of the application's output. Proper management of output IDs is vital for the successful operation of the application and integration with other system components.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- IMAGE
    - Images provide a visual representation of the application, enhancing understanding and communication. They can be used to display the application's interface, icons, or other visual elements, which are important for user interaction and branding. Including images can significantly improve user experience and perception of the application.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- description
    - The description parameter is essential for providing context and background information about the application. It helps convey the purpose, features, and use cases of the application, benefiting both users and developers. A clear and concise description can greatly assist in the documentation and promotion of the application.
    - Comfy dtype: STRING
    - Python dtype: str
- version
    - The version parameter is critical for tracking the evolution and updates of the application. It helps record changes and improvements, thereby better managing the application's development cycle. Version numbers are a key reference point for users and developers when addressing issues or planning new features.
    - Comfy dtype: INT
    - Python dtype: int
- share_prefix
    - The shared prefix is important for defining how the application's data and resources are shared and accessed. It lays the foundation for data exchange and collaboration within the system, ensuring the application's sharing mechanisms align with the overall system architecture.
    - Comfy dtype: STRING
    - Python dtype: str
- link
    - The link parameter is important for directing users to additional resources or content related to the application. It can provide access to documentation, support, or supplementary materials, which is valuable for enhancing user understanding and engagement with the application.
    - Comfy dtype: STRING
    - Python dtype: str
- category
    - The category parameter helps classify the application into specific domains or types, which is useful for organization and navigation. It aids in grouping similar applications together, making it easier for users to find and select applications that meet their needs.
    - Comfy dtype: STRING
    - Python dtype: str
- auto_save
    - The auto-save parameter is important for determining the data persistence and recovery behavior of the application. It decides whether the application's state should be automatically saved at regular intervals, ensuring users can recover their work in case of interruptions or system failures.
    - Comfy dtype: COMBO['enable', 'disable']
    - Python dtype: str

# Output types
- ui.json
    - The ui.json output is a structured representation of the application information, including its name, image, and various IDs. It serves as a comprehensive summary that can be used for further processing or display within the system. This output is important for integrating the application's data with other components and providing a clear overview of the application's state.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
