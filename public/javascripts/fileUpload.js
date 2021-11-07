FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 /100,
    imageResizeTragetWidth: 100,
    imageResizeTragetHeight: 150,
})
FilePond.parse(document.body)