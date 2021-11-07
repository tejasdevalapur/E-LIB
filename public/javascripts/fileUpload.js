const rootStyles=window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('book-cover-width-large')!=null && rootStyles.getPropertyValue('--book-cover-width-large') !== ''){
ready()
}else {
    document.getElementById('main-css').addEventListener('load', ready)
  }
  

function ready(){

    const coverWidth=parseFloat(rootStyles.getPropertyValue('--book-cover-width-large'))
    const coverAspectRatio = parseFloat(rootStyles.getPropertyValue('--book-cover-aspect-ratio'))
    const coverHeight = coverWidth / coverAspectRatio
    FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 1 / coverAspectRatio,
    imageResizeTragetWidth: coverWidth,
    imageResizeTragetHeight: coverHeight,
})
FilePond.parse(document.body)
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
}
