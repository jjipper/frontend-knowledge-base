2026-02-05 목요일

프로젝트의 뼈대를 만들기에 앞서,
우선 만들려는 프로젝트에 필요한 기능 상세 정의를 먼저 해보도록 하겠다.

--------------------------------------------------------------------------------------------------------------

1. Common
    - Header
        - Title (Logo)
    - Toast

2. Main
    - Intro Section
        - Icon
        - Subtitle
        - Main Title
        - Description
    - Issue Section
        - Section Header
            - Title
            - Last Updated
        - Issue List
            - Issue Card
                - Issue Type Icon
                - Issue Title
                - Issue Summary
                - Related Stock Tags
                    - Stock Name
                    - Price Change (%)
                - Issue Info Tag
                    - Mention Tag
                        - Icon
                        - Mention Count
                    - Impact Tag
    - Stock Section
        - Section Header
            - Title
        - Stock List
            - Stock Card
                - Stock Name
                - Ticker Symbol
                - Current Price
                - Price Change (%)
                    - Icon
                    - Percentage
                - Key Issue

3. Issue Detail
    - Detail Header
        - Back Button
        - Page Title
    - Issue Summary Section
        - Issue Type Icon
        - Issue Title
        - Issue Summary
        - Related Stock Tags
            - Title
            - Stock List
                - Stock Name
                - Ticker Symbol
                - Price Change (%)
        - Issue Info Tag
            - Mention Tag
                - Icon
                - Mention Count
            - Impact Tag
    - Related News Section
        - Section Header
            - Title
            - Last Updated
        - News Card
            - News Image
            - News Title
            - News Source
            - Published Time

4. News Modal
    - Modal Header
        - News Title
        - News Source
        - Published Time
        - Bookmark Button
        - Close Button (X)
    - Modal Body
        - Summary (3 Lines)
            - Title
            - Summary Content
                - Item Number
                - Item Content
        - Impact Analysis
            - Title
            - Impact Content
            - Impact Tag
        - Next Checkpoint
            - Title
            - Checkpoint Content
        - Info Message
    - Modal Footer
        - Close Modal Button
        - Previous News Button
        - Next News Button

5. Stock Detail
    - Detail Header
        - Back Button
        - Page Title (Stock Name)
    - Stock Overview
        - Stock Name
        - Ticker Symbol
        - Current Price
        - Price Change (%)
        - Buttons
            - View Weekly Button
            - View Monthly Button
        - Stock Chart
        - Stock Movement Info
            - Price Info Tags
                - Daily Range Tag
                    - Tag Name
                    - Tag Value
                - Period Low Tag (Weekly / Monthly)
                    - Tag Name
                    - Tag Value
                - Period High Tag (Weekly / Monthly)
                    - Tag Name
                    - Tag Value
            - Period Change Info
                - 1-Week Change (%)
                    - Title
                    - Value
                - 1-Month Change (%)
                    - Title
                    - Value
        - Key Issue Summary
            - Title
            - Summary Text
    - Related News Section
        - Section Header
            - Title
            - Last Updated
        - News Card
            - News Image
            - News Title
            - News Source
            - Published Time

--------------------------------------------------------------------------------------------------------------

[Phase 1]
- High Priority
    - Modal
    - Toast
    - Infinite Scroll (including Images)
- Medium Priority
    - News Crawling
    - AI Summary
- Low Priority
    - Chart

[Phase 2]
- Main
    - Domestic / Global Segmentation
- Stock Detail
    - Issue Timeline

[Additional]
- Stock Detail
    - Similar Stocks
    - Contrasting Stocks
- Bookmarks Page
