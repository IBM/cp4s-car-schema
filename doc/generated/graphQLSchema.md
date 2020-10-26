# GraphQL Schema 

## APIType: Query 

### assets 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetSort]](#type-AssetSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetFilter](#type-AssetFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Asset]](#type-Asset) 

### containers 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ContainerSort]](#type-ContainerSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ContainerFilter](#type-ContainerFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Container]](#type-Container) 

### ipAddrs 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrSort]](#type-IpAddrSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrFilter](#type-IpAddrFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddr]](#type-IpAddr) 

### unifiedUsers 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[UnifiedUserSort]](#type-UnifiedUserSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [UnifiedUserFilter](#type-UnifiedUserFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[UnifiedUser]](#type-UnifiedUser) 

### users 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[UserSort]](#type-UserSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [UserFilter](#type-UserFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[User]](#type-User) 

### unifiedAccounts 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[UnifiedAccountSort]](#type-UnifiedAccountSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [UnifiedAccountFilter](#type-UnifiedAccountFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[UnifiedAccount]](#type-UnifiedAccount) 

### accounts 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AccountSort]](#type-AccountSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AccountFilter](#type-AccountFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Account]](#type-Account) 

### applications 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ApplicationSort]](#type-ApplicationSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ApplicationFilter](#type-ApplicationFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Application]](#type-Application) 

### hostnames 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[HostnameSort]](#type-HostnameSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [HostnameFilter](#type-HostnameFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Hostname]](#type-Hostname) 

### businessprocesses 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[BusinessprocessSort]](#type-BusinessprocessSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [BusinessprocessFilter](#type-BusinessprocessFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Businessprocess]](#type-Businessprocess) 

### databases 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[DatabaseSort]](#type-DatabaseSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [DatabaseFilter](#type-DatabaseFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Database]](#type-Database) 

### macAddrs 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[MacAddrSort]](#type-MacAddrSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [MacAddrFilter](#type-MacAddrFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[MacAddr]](#type-MacAddr) 

### reports 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ReportSort]](#type-ReportSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ReportFilter](#type-ReportFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Report]](#type-Report) 

### ports 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[PortSort]](#type-PortSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [PortFilter](#type-PortFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Port]](#type-Port) 

### sources 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[SourceSort]](#type-SourceSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [SourceFilter](#type-SourceFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Source]](#type-Source) 

### vulnerabilities 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[VulnerabilitySort]](#type-VulnerabilitySort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [VulnerabilityFilter](#type-VulnerabilityFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Vulnerability]](#type-Vulnerability) 

### tags 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagSort]](#type-TagSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagFilter](#type-TagFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Tag]](#type-Tag) 

### geolocations 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[GeolocationSort]](#type-GeolocationSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [GeolocationFilter](#type-GeolocationFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[Geolocation]](#type-Geolocation) 

### assetVulnerabilityEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetVulnerabilityEdgeSort]](#type-AssetVulnerabilityEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetVulnerabilityEdgeFilter](#type-AssetVulnerabilityEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetVulnerabilityEdge]](#type-AssetVulnerabilityEdge) 

### assetIpAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetIpAddrEdgeSort]](#type-AssetIpAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetIpAddrEdgeFilter](#type-AssetIpAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetIpAddrEdge]](#type-AssetIpAddrEdge) 

### assetMacAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetMacAddrEdgeSort]](#type-AssetMacAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetMacAddrEdgeFilter](#type-AssetMacAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetMacAddrEdge]](#type-AssetMacAddrEdge) 

### assetHostnameEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetHostnameEdgeSort]](#type-AssetHostnameEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetHostnameEdgeFilter](#type-AssetHostnameEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetHostnameEdge]](#type-AssetHostnameEdge) 

### assetAccountEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetAccountEdgeSort]](#type-AssetAccountEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetAccountEdgeFilter](#type-AssetAccountEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetAccountEdge]](#type-AssetAccountEdge) 

### assetContainerEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetContainerEdgeSort]](#type-AssetContainerEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetContainerEdgeFilter](#type-AssetContainerEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetContainerEdge]](#type-AssetContainerEdge) 

### assetApplicationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetApplicationEdgeSort]](#type-AssetApplicationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetApplicationEdgeFilter](#type-AssetApplicationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetApplicationEdge]](#type-AssetApplicationEdge) 

### assetDatabaseEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetDatabaseEdgeSort]](#type-AssetDatabaseEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetDatabaseEdgeFilter](#type-AssetDatabaseEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetDatabaseEdge]](#type-AssetDatabaseEdge) 

### assetGeolocationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AssetGeolocationEdgeSort]](#type-AssetGeolocationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AssetGeolocationEdgeFilter](#type-AssetGeolocationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AssetGeolocationEdge]](#type-AssetGeolocationEdge) 

### applicationPortEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ApplicationPortEdgeSort]](#type-ApplicationPortEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ApplicationPortEdgeFilter](#type-ApplicationPortEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[ApplicationPortEdge]](#type-ApplicationPortEdge) 

### accountApplicationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AccountApplicationEdgeSort]](#type-AccountApplicationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AccountApplicationEdgeFilter](#type-AccountApplicationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AccountApplicationEdge]](#type-AccountApplicationEdge) 

### applicationIpAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ApplicationIpAddrEdgeSort]](#type-ApplicationIpAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ApplicationIpAddrEdgeFilter](#type-ApplicationIpAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[ApplicationIpAddrEdge]](#type-ApplicationIpAddrEdge) 

### businessprocessApplicationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[BusinessprocessApplicationEdgeSort]](#type-BusinessprocessApplicationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [BusinessprocessApplicationEdgeFilter](#type-BusinessprocessApplicationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[BusinessprocessApplicationEdge]](#type-BusinessprocessApplicationEdge) 

### businessprocessAccountEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[BusinessprocessAccountEdgeSort]](#type-BusinessprocessAccountEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [BusinessprocessAccountEdgeFilter](#type-BusinessprocessAccountEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[BusinessprocessAccountEdge]](#type-BusinessprocessAccountEdge) 

### applicationDatabaseEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ApplicationDatabaseEdgeSort]](#type-ApplicationDatabaseEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ApplicationDatabaseEdgeFilter](#type-ApplicationDatabaseEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[ApplicationDatabaseEdge]](#type-ApplicationDatabaseEdge) 

### applicationVulnerabilityEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[ApplicationVulnerabilityEdgeSort]](#type-ApplicationVulnerabilityEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [ApplicationVulnerabilityEdgeFilter](#type-ApplicationVulnerabilityEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[ApplicationVulnerabilityEdge]](#type-ApplicationVulnerabilityEdge) 

### databaseIpAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[DatabaseIpAddrEdgeSort]](#type-DatabaseIpAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [DatabaseIpAddrEdgeFilter](#type-DatabaseIpAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[DatabaseIpAddrEdge]](#type-DatabaseIpAddrEdge) 

### databaseVulnerabilityEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[DatabaseVulnerabilityEdgeSort]](#type-DatabaseVulnerabilityEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [DatabaseVulnerabilityEdgeFilter](#type-DatabaseVulnerabilityEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[DatabaseVulnerabilityEdge]](#type-DatabaseVulnerabilityEdge) 

### ipAddrContainerEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrContainerEdgeSort]](#type-IpAddrContainerEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrContainerEdgeFilter](#type-IpAddrContainerEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddrContainerEdge]](#type-IpAddrContainerEdge) 

### ipAddrMacAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrMacAddrEdgeSort]](#type-IpAddrMacAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrMacAddrEdgeFilter](#type-IpAddrMacAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddrMacAddrEdge]](#type-IpAddrMacAddrEdge) 

### ipAddrHostnameEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrHostnameEdgeSort]](#type-IpAddrHostnameEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrHostnameEdgeFilter](#type-IpAddrHostnameEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddrHostnameEdge]](#type-IpAddrHostnameEdge) 

### ipAddrVulnerabilityEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrVulnerabilityEdgeSort]](#type-IpAddrVulnerabilityEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrVulnerabilityEdgeFilter](#type-IpAddrVulnerabilityEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddrVulnerabilityEdge]](#type-IpAddrVulnerabilityEdge) 

### ipAddrGeolocationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrGeolocationEdgeSort]](#type-IpAddrGeolocationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrGeolocationEdgeFilter](#type-IpAddrGeolocationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddrGeolocationEdge]](#type-IpAddrGeolocationEdge) 

### ipAddrPortEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[IpAddrPortEdgeSort]](#type-IpAddrPortEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [IpAddrPortEdgeFilter](#type-IpAddrPortEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[IpAddrPortEdge]](#type-IpAddrPortEdge) 

### userAccountEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[UserAccountEdgeSort]](#type-UserAccountEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [UserAccountEdgeFilter](#type-UserAccountEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[UserAccountEdge]](#type-UserAccountEdge) 

### accountDatabaseEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AccountDatabaseEdgeSort]](#type-AccountDatabaseEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AccountDatabaseEdgeFilter](#type-AccountDatabaseEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AccountDatabaseEdge]](#type-AccountDatabaseEdge) 

### accountHostnameEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AccountHostnameEdgeSort]](#type-AccountHostnameEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AccountHostnameEdgeFilter](#type-AccountHostnameEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AccountHostnameEdge]](#type-AccountHostnameEdge) 

### accountIpAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[AccountIpAddrEdgeSort]](#type-AccountIpAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [AccountIpAddrEdgeFilter](#type-AccountIpAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[AccountIpAddrEdge]](#type-AccountIpAddrEdge) 

### unifiedAccountAccountEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[UnifiedAccountAccountEdgeSort]](#type-UnifiedAccountAccountEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [UnifiedAccountAccountEdgeFilter](#type-UnifiedAccountAccountEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[UnifiedAccountAccountEdge]](#type-UnifiedAccountAccountEdge) 

### unifiedUserUserEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[UnifiedUserUserEdgeSort]](#type-UnifiedUserUserEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [UnifiedUserUserEdgeFilter](#type-UnifiedUserUserEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[UnifiedUserUserEdge]](#type-UnifiedUserUserEdge) 

### portVulnerabilityEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[PortVulnerabilityEdgeSort]](#type-PortVulnerabilityEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [PortVulnerabilityEdgeFilter](#type-PortVulnerabilityEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[PortVulnerabilityEdge]](#type-PortVulnerabilityEdge) 

### tagAssetEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagAssetEdgeSort]](#type-TagAssetEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagAssetEdgeFilter](#type-TagAssetEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagAssetEdge]](#type-TagAssetEdge) 

### tagContainerEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagContainerEdgeSort]](#type-TagContainerEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagContainerEdgeFilter](#type-TagContainerEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagContainerEdge]](#type-TagContainerEdge) 

### tagIpAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagIpAddrEdgeSort]](#type-TagIpAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagIpAddrEdgeFilter](#type-TagIpAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagIpAddrEdge]](#type-TagIpAddrEdge) 

### tagUnifiedUserEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagUnifiedUserEdgeSort]](#type-TagUnifiedUserEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagUnifiedUserEdgeFilter](#type-TagUnifiedUserEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagUnifiedUserEdge]](#type-TagUnifiedUserEdge) 

### tagUserEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagUserEdgeSort]](#type-TagUserEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagUserEdgeFilter](#type-TagUserEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagUserEdge]](#type-TagUserEdge) 

### tagUnifiedAccountEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagUnifiedAccountEdgeSort]](#type-TagUnifiedAccountEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagUnifiedAccountEdgeFilter](#type-TagUnifiedAccountEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagUnifiedAccountEdge]](#type-TagUnifiedAccountEdge) 

### tagAccountEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagAccountEdgeSort]](#type-TagAccountEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagAccountEdgeFilter](#type-TagAccountEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagAccountEdge]](#type-TagAccountEdge) 

### tagApplicationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagApplicationEdgeSort]](#type-TagApplicationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagApplicationEdgeFilter](#type-TagApplicationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagApplicationEdge]](#type-TagApplicationEdge) 

### tagHostnameEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagHostnameEdgeSort]](#type-TagHostnameEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagHostnameEdgeFilter](#type-TagHostnameEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagHostnameEdge]](#type-TagHostnameEdge) 

### tagBusinessprocessEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagBusinessprocessEdgeSort]](#type-TagBusinessprocessEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagBusinessprocessEdgeFilter](#type-TagBusinessprocessEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagBusinessprocessEdge]](#type-TagBusinessprocessEdge) 

### tagDatabaseEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagDatabaseEdgeSort]](#type-TagDatabaseEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagDatabaseEdgeFilter](#type-TagDatabaseEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagDatabaseEdge]](#type-TagDatabaseEdge) 

### tagMacAddrEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagMacAddrEdgeSort]](#type-TagMacAddrEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagMacAddrEdgeFilter](#type-TagMacAddrEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagMacAddrEdge]](#type-TagMacAddrEdge) 

### tagPortEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagPortEdgeSort]](#type-TagPortEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagPortEdgeFilter](#type-TagPortEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagPortEdge]](#type-TagPortEdge) 

### tagVulnerabilityEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagVulnerabilityEdgeSort]](#type-TagVulnerabilityEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagVulnerabilityEdgeFilter](#type-TagVulnerabilityEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagVulnerabilityEdge]](#type-TagVulnerabilityEdge) 

### tagGeolocationEdges 

* Arguments 

   * limit: [Int](#type-Int) 

     > Specifies how many elements should be at most included in the result. 

  * offset: [Int](#type-Int) 

     > Specifies how many elements from the result shall be skipped.    If limit is not specified, this argument is ignored. 

  * orderBy: [[TagGeolocationEdgeSort]](#type-TagGeolocationEdgeSort) 

     > Specifies the field names to sort the results by in ascending or descending order. 

  * globalFilter: [GlobalFilter](#type-GlobalFilter) 

     > Global filter is applied to each collection in all of the search range.    It is automatically joined with other arguments in each search level by 'AND' conjunction. 

  * filter: [TagGeolocationEdgeFilter](#type-TagGeolocationEdgeFilter) 

     > Provides advanced search via multiple operators in a single search level.    It is automatically joined with other arguments in the same search level by 'AND' conjunction. 

* Return: ![[TagGeolocationEdge]](#type-TagGeolocationEdge) 

## GraphQL Types 

### type Asset 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* business_value 

  * type: [Float](#type-Float) 

* risk 

  * type: [Float](#type-Float) 

* description 

  * type: [String](#type-String) 

* asset_type 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* vulnerabilityEdges 

  * Arguments 

      * filter 

         > type: [AssetVulnerabilityEdgeFilter](#type-AssetVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetVulnerabilityEdgeSort]](#type-AssetVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[AssetVulnerabilityEdge]!](#type-AssetVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* vulnerabilities 

  * Arguments 

      * filter 

         > type: [VulnerabilityFilter](#type-VulnerabilityFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[VulnerabilitySort]](#type-VulnerabilitySort) 

         > isArray: true 

  * type: [[Vulnerability]!](#type-Vulnerability) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [AssetIpAddrEdgeFilter](#type-AssetIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetIpAddrEdgeSort]](#type-AssetIpAddrEdgeSort) 

         > isArray: true 

  * type: [[AssetIpAddrEdge]!](#type-AssetIpAddrEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* macAddrEdges 

  * Arguments 

      * filter 

         > type: [AssetMacAddrEdgeFilter](#type-AssetMacAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetMacAddrEdgeSort]](#type-AssetMacAddrEdgeSort) 

         > isArray: true 

  * type: [[AssetMacAddrEdge]!](#type-AssetMacAddrEdge) 

  * isArray: true 

  * required: true 

* macAddrs 

  * Arguments 

      * filter 

         > type: [MacAddrFilter](#type-MacAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[MacAddrSort]](#type-MacAddrSort) 

         > isArray: true 

  * type: [[MacAddr]!](#type-MacAddr) 

  * isArray: true 

  * required: true 

* hostnameEdges 

  * Arguments 

      * filter 

         > type: [AssetHostnameEdgeFilter](#type-AssetHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetHostnameEdgeSort]](#type-AssetHostnameEdgeSort) 

         > isArray: true 

  * type: [[AssetHostnameEdge]!](#type-AssetHostnameEdge) 

  * isArray: true 

  * required: true 

* hostnames 

  * Arguments 

      * filter 

         > type: [HostnameFilter](#type-HostnameFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[HostnameSort]](#type-HostnameSort) 

         > isArray: true 

  * type: [[Hostname]!](#type-Hostname) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [AssetAccountEdgeFilter](#type-AssetAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetAccountEdgeSort]](#type-AssetAccountEdgeSort) 

         > isArray: true 

  * type: [[AssetAccountEdge]!](#type-AssetAccountEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* containerEdges 

  * Arguments 

      * filter 

         > type: [AssetContainerEdgeFilter](#type-AssetContainerEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetContainerEdgeSort]](#type-AssetContainerEdgeSort) 

         > isArray: true 

  * type: [[AssetContainerEdge]!](#type-AssetContainerEdge) 

  * isArray: true 

  * required: true 

* containers 

  * Arguments 

      * filter 

         > type: [ContainerFilter](#type-ContainerFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ContainerSort]](#type-ContainerSort) 

         > isArray: true 

  * type: [[Container]!](#type-Container) 

  * isArray: true 

  * required: true 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [AssetApplicationEdgeFilter](#type-AssetApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetApplicationEdgeSort]](#type-AssetApplicationEdgeSort) 

         > isArray: true 

  * type: [[AssetApplicationEdge]!](#type-AssetApplicationEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* databaseEdges 

  * Arguments 

      * filter 

         > type: [AssetDatabaseEdgeFilter](#type-AssetDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetDatabaseEdgeSort]](#type-AssetDatabaseEdgeSort) 

         > isArray: true 

  * type: [[AssetDatabaseEdge]!](#type-AssetDatabaseEdge) 

  * isArray: true 

  * required: true 

* databases 

  * Arguments 

      * filter 

         > type: [DatabaseFilter](#type-DatabaseFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseSort]](#type-DatabaseSort) 

         > isArray: true 

  * type: [[Database]!](#type-Database) 

  * isArray: true 

  * required: true 

* geolocationEdges 

  * Arguments 

      * filter 

         > type: [AssetGeolocationEdgeFilter](#type-AssetGeolocationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetGeolocationEdgeSort]](#type-AssetGeolocationEdgeSort) 

         > isArray: true 

  * type: [[AssetGeolocationEdge]!](#type-AssetGeolocationEdge) 

  * isArray: true 

  * required: true 

* geolocations 

  * Arguments 

      * filter 

         > type: [GeolocationFilter](#type-GeolocationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[GeolocationSort]](#type-GeolocationSort) 

         > isArray: true 

  * type: [[Geolocation]!](#type-Geolocation) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagAssetEdgeFilter](#type-TagAssetEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagAssetEdgeSort]](#type-TagAssetEdgeSort) 

         > isArray: true 

  * type: [[TagAssetEdge]!](#type-TagAssetEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Container 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* image 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetContainerEdgeFilter](#type-AssetContainerEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetContainerEdgeSort]](#type-AssetContainerEdgeSort) 

         > isArray: true 

  * type: [[AssetContainerEdge]!](#type-AssetContainerEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrContainerEdgeFilter](#type-IpAddrContainerEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrContainerEdgeSort]](#type-IpAddrContainerEdgeSort) 

         > isArray: true 

  * type: [[IpAddrContainerEdge]!](#type-IpAddrContainerEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagContainerEdgeFilter](#type-TagContainerEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagContainerEdgeSort]](#type-TagContainerEdgeSort) 

         > isArray: true 

  * type: [[TagContainerEdge]!](#type-TagContainerEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type IpAddr 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetIpAddrEdgeFilter](#type-AssetIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetIpAddrEdgeSort]](#type-AssetIpAddrEdgeSort) 

         > isArray: true 

  * type: [[AssetIpAddrEdge]!](#type-AssetIpAddrEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [ApplicationIpAddrEdgeFilter](#type-ApplicationIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationIpAddrEdgeSort]](#type-ApplicationIpAddrEdgeSort) 

         > isArray: true 

  * type: [[ApplicationIpAddrEdge]!](#type-ApplicationIpAddrEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* databaseEdges 

  * Arguments 

      * filter 

         > type: [DatabaseIpAddrEdgeFilter](#type-DatabaseIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseIpAddrEdgeSort]](#type-DatabaseIpAddrEdgeSort) 

         > isArray: true 

  * type: [[DatabaseIpAddrEdge]!](#type-DatabaseIpAddrEdge) 

  * isArray: true 

  * required: true 

* databases 

  * Arguments 

      * filter 

         > type: [DatabaseFilter](#type-DatabaseFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseSort]](#type-DatabaseSort) 

         > isArray: true 

  * type: [[Database]!](#type-Database) 

  * isArray: true 

  * required: true 

* containerEdges 

  * Arguments 

      * filter 

         > type: [IpAddrContainerEdgeFilter](#type-IpAddrContainerEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrContainerEdgeSort]](#type-IpAddrContainerEdgeSort) 

         > isArray: true 

  * type: [[IpAddrContainerEdge]!](#type-IpAddrContainerEdge) 

  * isArray: true 

  * required: true 

* containers 

  * Arguments 

      * filter 

         > type: [ContainerFilter](#type-ContainerFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ContainerSort]](#type-ContainerSort) 

         > isArray: true 

  * type: [[Container]!](#type-Container) 

  * isArray: true 

  * required: true 

* macAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrMacAddrEdgeFilter](#type-IpAddrMacAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrMacAddrEdgeSort]](#type-IpAddrMacAddrEdgeSort) 

         > isArray: true 

  * type: [[IpAddrMacAddrEdge]!](#type-IpAddrMacAddrEdge) 

  * isArray: true 

  * required: true 

* macAddrs 

  * Arguments 

      * filter 

         > type: [MacAddrFilter](#type-MacAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[MacAddrSort]](#type-MacAddrSort) 

         > isArray: true 

  * type: [[MacAddr]!](#type-MacAddr) 

  * isArray: true 

  * required: true 

* hostnameEdges 

  * Arguments 

      * filter 

         > type: [IpAddrHostnameEdgeFilter](#type-IpAddrHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrHostnameEdgeSort]](#type-IpAddrHostnameEdgeSort) 

         > isArray: true 

  * type: [[IpAddrHostnameEdge]!](#type-IpAddrHostnameEdge) 

  * isArray: true 

  * required: true 

* hostnames 

  * Arguments 

      * filter 

         > type: [HostnameFilter](#type-HostnameFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[HostnameSort]](#type-HostnameSort) 

         > isArray: true 

  * type: [[Hostname]!](#type-Hostname) 

  * isArray: true 

  * required: true 

* vulnerabilityEdges 

  * Arguments 

      * filter 

         > type: [IpAddrVulnerabilityEdgeFilter](#type-IpAddrVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrVulnerabilityEdgeSort]](#type-IpAddrVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[IpAddrVulnerabilityEdge]!](#type-IpAddrVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* vulnerabilities 

  * Arguments 

      * filter 

         > type: [VulnerabilityFilter](#type-VulnerabilityFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[VulnerabilitySort]](#type-VulnerabilitySort) 

         > isArray: true 

  * type: [[Vulnerability]!](#type-Vulnerability) 

  * isArray: true 

  * required: true 

* geolocationEdges 

  * Arguments 

      * filter 

         > type: [IpAddrGeolocationEdgeFilter](#type-IpAddrGeolocationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrGeolocationEdgeSort]](#type-IpAddrGeolocationEdgeSort) 

         > isArray: true 

  * type: [[IpAddrGeolocationEdge]!](#type-IpAddrGeolocationEdge) 

  * isArray: true 

  * required: true 

* geolocations 

  * Arguments 

      * filter 

         > type: [GeolocationFilter](#type-GeolocationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[GeolocationSort]](#type-GeolocationSort) 

         > isArray: true 

  * type: [[Geolocation]!](#type-Geolocation) 

  * isArray: true 

  * required: true 

* portEdges 

  * Arguments 

      * filter 

         > type: [IpAddrPortEdgeFilter](#type-IpAddrPortEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrPortEdgeSort]](#type-IpAddrPortEdgeSort) 

         > isArray: true 

  * type: [[IpAddrPortEdge]!](#type-IpAddrPortEdge) 

  * isArray: true 

  * required: true 

* ports 

  * Arguments 

      * filter 

         > type: [PortFilter](#type-PortFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[PortSort]](#type-PortSort) 

         > isArray: true 

  * type: [[Port]!](#type-Port) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [AccountIpAddrEdgeFilter](#type-AccountIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountIpAddrEdgeSort]](#type-AccountIpAddrEdgeSort) 

         > isArray: true 

  * type: [[AccountIpAddrEdge]!](#type-AccountIpAddrEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagIpAddrEdgeFilter](#type-TagIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagIpAddrEdgeSort]](#type-TagIpAddrEdgeSort) 

         > isArray: true 

  * type: [[TagIpAddrEdge]!](#type-TagIpAddrEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type UnifiedUser 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* userEdges 

  * Arguments 

      * filter 

         > type: [UnifiedUserUserEdgeFilter](#type-UnifiedUserUserEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedUserUserEdgeSort]](#type-UnifiedUserUserEdgeSort) 

         > isArray: true 

  * type: [[UnifiedUserUserEdge]!](#type-UnifiedUserUserEdge) 

  * isArray: true 

  * required: true 

* users 

  * Arguments 

      * filter 

         > type: [UserFilter](#type-UserFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UserSort]](#type-UserSort) 

         > isArray: true 

  * type: [[User]!](#type-User) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagUnifiedUserEdgeFilter](#type-TagUnifiedUserEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagUnifiedUserEdgeSort]](#type-TagUnifiedUserEdgeSort) 

         > isArray: true 

  * type: [[TagUnifiedUserEdge]!](#type-TagUnifiedUserEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type User 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* username 

  * type: [String](#type-String) 

* fullname 

  * type: [String](#type-String) 

* job_title 

  * type: [String](#type-String) 

* email 

  * type: [String](#type-String) 

* description 

  * type: [String](#type-String) 

* role 

  * type: [String](#type-String) 

* family_name 

  * type: [String](#type-String) 

* given_name 

  * type: [String](#type-String) 

* upn 

  * type: [String](#type-String) 

* user_category 

  * type: [String](#type-String) 

* title 

  * type: [String](#type-String) 

* employee_id 

  * type: [String](#type-String) 

* active 

  * type: [Boolean](#type-Boolean) 

* department 

  * type: [String](#type-String) 

* modified 

  * type: [Float](#type-Float) 

* cumulative_score 

  * type: [Float](#type-Float) 

* current_score 

  * type: [Float](#type-Float) 

* critical 

  * type: [Float](#type-Float) 

* high 

  * type: [Float](#type-Float) 

* medium 

  * type: [Float](#type-Float) 

* low 

  * type: [Float](#type-Float) 

* first_occurrence 

  * type: [Float](#type-Float) 

* last_occurrence 

  * type: [Float](#type-Float) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* accountEdges 

  * Arguments 

      * filter 

         > type: [UserAccountEdgeFilter](#type-UserAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UserAccountEdgeSort]](#type-UserAccountEdgeSort) 

         > isArray: true 

  * type: [[UserAccountEdge]!](#type-UserAccountEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* unifiedUserEdges 

  * Arguments 

      * filter 

         > type: [UnifiedUserUserEdgeFilter](#type-UnifiedUserUserEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedUserUserEdgeSort]](#type-UnifiedUserUserEdgeSort) 

         > isArray: true 

  * type: [[UnifiedUserUserEdge]!](#type-UnifiedUserUserEdge) 

  * isArray: true 

  * required: true 

* unifiedUsers 

  * Arguments 

      * filter 

         > type: [UnifiedUserFilter](#type-UnifiedUserFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedUserSort]](#type-UnifiedUserSort) 

         > isArray: true 

  * type: [[UnifiedUser]!](#type-UnifiedUser) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagUserEdgeFilter](#type-TagUserEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagUserEdgeSort]](#type-TagUserEdgeSort) 

         > isArray: true 

  * type: [[TagUserEdge]!](#type-TagUserEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type UnifiedAccount 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* accountEdges 

  * Arguments 

      * filter 

         > type: [UnifiedAccountAccountEdgeFilter](#type-UnifiedAccountAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedAccountAccountEdgeSort]](#type-UnifiedAccountAccountEdgeSort) 

         > isArray: true 

  * type: [[UnifiedAccountAccountEdge]!](#type-UnifiedAccountAccountEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagUnifiedAccountEdgeFilter](#type-TagUnifiedAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagUnifiedAccountEdgeSort]](#type-TagUnifiedAccountEdgeSort) 

         > isArray: true 

  * type: [[TagUnifiedAccountEdge]!](#type-TagUnifiedAccountEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Account 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* created 

  * type: [Float](#type-Float) 

* active 

  * type: [Boolean](#type-Boolean) 

* compliance_status 

  * type: [Boolean](#type-Boolean) 

* modified 

  * type: [Float](#type-Float) 

* cumulative_score 

  * type: [Float](#type-Float) 

* current_score 

  * type: [Float](#type-Float) 

* critical 

  * type: [Float](#type-Float) 

* high 

  * type: [Float](#type-Float) 

* medium 

  * type: [Float](#type-Float) 

* low 

  * type: [Float](#type-Float) 

* first_occurrence 

  * type: [Float](#type-Float) 

* last_occurrence 

  * type: [Float](#type-Float) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetAccountEdgeFilter](#type-AssetAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetAccountEdgeSort]](#type-AssetAccountEdgeSort) 

         > isArray: true 

  * type: [[AssetAccountEdge]!](#type-AssetAccountEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [AccountApplicationEdgeFilter](#type-AccountApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountApplicationEdgeSort]](#type-AccountApplicationEdgeSort) 

         > isArray: true 

  * type: [[AccountApplicationEdge]!](#type-AccountApplicationEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* businessprocessEdges 

  * Arguments 

      * filter 

         > type: [BusinessprocessAccountEdgeFilter](#type-BusinessprocessAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessAccountEdgeSort]](#type-BusinessprocessAccountEdgeSort) 

         > isArray: true 

  * type: [[BusinessprocessAccountEdge]!](#type-BusinessprocessAccountEdge) 

  * isArray: true 

  * required: true 

* businessprocesses 

  * Arguments 

      * filter 

         > type: [BusinessprocessFilter](#type-BusinessprocessFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessSort]](#type-BusinessprocessSort) 

         > isArray: true 

  * type: [[Businessprocess]!](#type-Businessprocess) 

  * isArray: true 

  * required: true 

* userEdges 

  * Arguments 

      * filter 

         > type: [UserAccountEdgeFilter](#type-UserAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UserAccountEdgeSort]](#type-UserAccountEdgeSort) 

         > isArray: true 

  * type: [[UserAccountEdge]!](#type-UserAccountEdge) 

  * isArray: true 

  * required: true 

* users 

  * Arguments 

      * filter 

         > type: [UserFilter](#type-UserFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UserSort]](#type-UserSort) 

         > isArray: true 

  * type: [[User]!](#type-User) 

  * isArray: true 

  * required: true 

* databaseEdges 

  * Arguments 

      * filter 

         > type: [AccountDatabaseEdgeFilter](#type-AccountDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountDatabaseEdgeSort]](#type-AccountDatabaseEdgeSort) 

         > isArray: true 

  * type: [[AccountDatabaseEdge]!](#type-AccountDatabaseEdge) 

  * isArray: true 

  * required: true 

* databases 

  * Arguments 

      * filter 

         > type: [DatabaseFilter](#type-DatabaseFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseSort]](#type-DatabaseSort) 

         > isArray: true 

  * type: [[Database]!](#type-Database) 

  * isArray: true 

  * required: true 

* hostnameEdges 

  * Arguments 

      * filter 

         > type: [AccountHostnameEdgeFilter](#type-AccountHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountHostnameEdgeSort]](#type-AccountHostnameEdgeSort) 

         > isArray: true 

  * type: [[AccountHostnameEdge]!](#type-AccountHostnameEdge) 

  * isArray: true 

  * required: true 

* hostnames 

  * Arguments 

      * filter 

         > type: [HostnameFilter](#type-HostnameFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[HostnameSort]](#type-HostnameSort) 

         > isArray: true 

  * type: [[Hostname]!](#type-Hostname) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [AccountIpAddrEdgeFilter](#type-AccountIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountIpAddrEdgeSort]](#type-AccountIpAddrEdgeSort) 

         > isArray: true 

  * type: [[AccountIpAddrEdge]!](#type-AccountIpAddrEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* unifiedAccountEdges 

  * Arguments 

      * filter 

         > type: [UnifiedAccountAccountEdgeFilter](#type-UnifiedAccountAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedAccountAccountEdgeSort]](#type-UnifiedAccountAccountEdgeSort) 

         > isArray: true 

  * type: [[UnifiedAccountAccountEdge]!](#type-UnifiedAccountAccountEdge) 

  * isArray: true 

  * required: true 

* unifiedAccounts 

  * Arguments 

      * filter 

         > type: [UnifiedAccountFilter](#type-UnifiedAccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedAccountSort]](#type-UnifiedAccountSort) 

         > isArray: true 

  * type: [[UnifiedAccount]!](#type-UnifiedAccount) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagAccountEdgeFilter](#type-TagAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagAccountEdgeSort]](#type-TagAccountEdgeSort) 

         > isArray: true 

  * type: [[TagAccountEdge]!](#type-TagAccountEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Application 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* description 

  * type: [String](#type-String) 

* cpe 

  * type: [String](#type-String) 

* is_os 

  * type: [Boolean](#type-Boolean) 

* owner 

  * type: [String](#type-String) 

* owner_code 

  * type: [String](#type-String) 

* last_access_time 

  * type: [Float](#type-Float) 

* threat_score 

  * type: [Float](#type-Float) 

* app_type 

  * type: [String](#type-String) 

* cumulative_score 

  * type: [Float](#type-Float) 

* current_score 

  * type: [Float](#type-Float) 

* critical 

  * type: [Float](#type-Float) 

* high 

  * type: [Float](#type-Float) 

* medium 

  * type: [Float](#type-Float) 

* low 

  * type: [Float](#type-Float) 

* first_occurrence 

  * type: [Float](#type-Float) 

* last_occurrence 

  * type: [Float](#type-Float) 

* status 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetApplicationEdgeFilter](#type-AssetApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetApplicationEdgeSort]](#type-AssetApplicationEdgeSort) 

         > isArray: true 

  * type: [[AssetApplicationEdge]!](#type-AssetApplicationEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* portEdges 

  * Arguments 

      * filter 

         > type: [ApplicationPortEdgeFilter](#type-ApplicationPortEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationPortEdgeSort]](#type-ApplicationPortEdgeSort) 

         > isArray: true 

  * type: [[ApplicationPortEdge]!](#type-ApplicationPortEdge) 

  * isArray: true 

  * required: true 

* ports 

  * Arguments 

      * filter 

         > type: [PortFilter](#type-PortFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[PortSort]](#type-PortSort) 

         > isArray: true 

  * type: [[Port]!](#type-Port) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [AccountApplicationEdgeFilter](#type-AccountApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountApplicationEdgeSort]](#type-AccountApplicationEdgeSort) 

         > isArray: true 

  * type: [[AccountApplicationEdge]!](#type-AccountApplicationEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [ApplicationIpAddrEdgeFilter](#type-ApplicationIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationIpAddrEdgeSort]](#type-ApplicationIpAddrEdgeSort) 

         > isArray: true 

  * type: [[ApplicationIpAddrEdge]!](#type-ApplicationIpAddrEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* businessprocessEdges 

  * Arguments 

      * filter 

         > type: [BusinessprocessApplicationEdgeFilter](#type-BusinessprocessApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessApplicationEdgeSort]](#type-BusinessprocessApplicationEdgeSort) 

         > isArray: true 

  * type: [[BusinessprocessApplicationEdge]!](#type-BusinessprocessApplicationEdge) 

  * isArray: true 

  * required: true 

* businessprocesses 

  * Arguments 

      * filter 

         > type: [BusinessprocessFilter](#type-BusinessprocessFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessSort]](#type-BusinessprocessSort) 

         > isArray: true 

  * type: [[Businessprocess]!](#type-Businessprocess) 

  * isArray: true 

  * required: true 

* databaseEdges 

  * Arguments 

      * filter 

         > type: [ApplicationDatabaseEdgeFilter](#type-ApplicationDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationDatabaseEdgeSort]](#type-ApplicationDatabaseEdgeSort) 

         > isArray: true 

  * type: [[ApplicationDatabaseEdge]!](#type-ApplicationDatabaseEdge) 

  * isArray: true 

  * required: true 

* databases 

  * Arguments 

      * filter 

         > type: [DatabaseFilter](#type-DatabaseFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseSort]](#type-DatabaseSort) 

         > isArray: true 

  * type: [[Database]!](#type-Database) 

  * isArray: true 

  * required: true 

* vulnerabilityEdges 

  * Arguments 

      * filter 

         > type: [ApplicationVulnerabilityEdgeFilter](#type-ApplicationVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationVulnerabilityEdgeSort]](#type-ApplicationVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[ApplicationVulnerabilityEdge]!](#type-ApplicationVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* vulnerabilities 

  * Arguments 

      * filter 

         > type: [VulnerabilityFilter](#type-VulnerabilityFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[VulnerabilitySort]](#type-VulnerabilitySort) 

         > isArray: true 

  * type: [[Vulnerability]!](#type-Vulnerability) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagApplicationEdgeFilter](#type-TagApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagApplicationEdgeSort]](#type-TagApplicationEdgeSort) 

         > isArray: true 

  * type: [[TagApplicationEdge]!](#type-TagApplicationEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Hostname 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* host_name 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetHostnameEdgeFilter](#type-AssetHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetHostnameEdgeSort]](#type-AssetHostnameEdgeSort) 

         > isArray: true 

  * type: [[AssetHostnameEdge]!](#type-AssetHostnameEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrHostnameEdgeFilter](#type-IpAddrHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrHostnameEdgeSort]](#type-IpAddrHostnameEdgeSort) 

         > isArray: true 

  * type: [[IpAddrHostnameEdge]!](#type-IpAddrHostnameEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [AccountHostnameEdgeFilter](#type-AccountHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountHostnameEdgeSort]](#type-AccountHostnameEdgeSort) 

         > isArray: true 

  * type: [[AccountHostnameEdge]!](#type-AccountHostnameEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagHostnameEdgeFilter](#type-TagHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagHostnameEdgeSort]](#type-TagHostnameEdgeSort) 

         > isArray: true 

  * type: [[TagHostnameEdge]!](#type-TagHostnameEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Businessprocess 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* description 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [BusinessprocessApplicationEdgeFilter](#type-BusinessprocessApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessApplicationEdgeSort]](#type-BusinessprocessApplicationEdgeSort) 

         > isArray: true 

  * type: [[BusinessprocessApplicationEdge]!](#type-BusinessprocessApplicationEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [BusinessprocessAccountEdgeFilter](#type-BusinessprocessAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessAccountEdgeSort]](#type-BusinessprocessAccountEdgeSort) 

         > isArray: true 

  * type: [[BusinessprocessAccountEdge]!](#type-BusinessprocessAccountEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagBusinessprocessEdgeFilter](#type-TagBusinessprocessEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagBusinessprocessEdgeSort]](#type-TagBusinessprocessEdgeSort) 

         > isArray: true 

  * type: [[TagBusinessprocessEdge]!](#type-TagBusinessprocessEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Database 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* name 

  * type: [String](#type-String) 

* description 

  * type: [String](#type-String) 

* type 

  * type: [String](#type-String) 

* modified 

  * type: [Float](#type-Float) 

* protocol 

  * type: [String](#type-String) 

* port 

  * type: [String](#type-String) 

* datasource_name 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetDatabaseEdgeFilter](#type-AssetDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetDatabaseEdgeSort]](#type-AssetDatabaseEdgeSort) 

         > isArray: true 

  * type: [[AssetDatabaseEdge]!](#type-AssetDatabaseEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [ApplicationDatabaseEdgeFilter](#type-ApplicationDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationDatabaseEdgeSort]](#type-ApplicationDatabaseEdgeSort) 

         > isArray: true 

  * type: [[ApplicationDatabaseEdge]!](#type-ApplicationDatabaseEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [DatabaseIpAddrEdgeFilter](#type-DatabaseIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseIpAddrEdgeSort]](#type-DatabaseIpAddrEdgeSort) 

         > isArray: true 

  * type: [[DatabaseIpAddrEdge]!](#type-DatabaseIpAddrEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* vulnerabilityEdges 

  * Arguments 

      * filter 

         > type: [DatabaseVulnerabilityEdgeFilter](#type-DatabaseVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseVulnerabilityEdgeSort]](#type-DatabaseVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[DatabaseVulnerabilityEdge]!](#type-DatabaseVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* vulnerabilities 

  * Arguments 

      * filter 

         > type: [VulnerabilityFilter](#type-VulnerabilityFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[VulnerabilitySort]](#type-VulnerabilitySort) 

         > isArray: true 

  * type: [[Vulnerability]!](#type-Vulnerability) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [AccountDatabaseEdgeFilter](#type-AccountDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountDatabaseEdgeSort]](#type-AccountDatabaseEdgeSort) 

         > isArray: true 

  * type: [[AccountDatabaseEdge]!](#type-AccountDatabaseEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagDatabaseEdgeFilter](#type-TagDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagDatabaseEdgeSort]](#type-TagDatabaseEdgeSort) 

         > isArray: true 

  * type: [[TagDatabaseEdge]!](#type-TagDatabaseEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type MacAddr 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* interface 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetMacAddrEdgeFilter](#type-AssetMacAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetMacAddrEdgeSort]](#type-AssetMacAddrEdgeSort) 

         > isArray: true 

  * type: [[AssetMacAddrEdge]!](#type-AssetMacAddrEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrMacAddrEdgeFilter](#type-IpAddrMacAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrMacAddrEdgeSort]](#type-IpAddrMacAddrEdgeSort) 

         > isArray: true 

  * type: [[IpAddrMacAddrEdge]!](#type-IpAddrMacAddrEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagMacAddrEdgeFilter](#type-TagMacAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagMacAddrEdgeSort]](#type-TagMacAddrEdgeSort) 

         > isArray: true 

  * type: [[TagMacAddrEdge]!](#type-TagMacAddrEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Report 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* type 

  * type: [String](#type-String) 

* parameters 

  * type: [String](#type-String) 

* value 

  * type: [String](#type-String) 

* modified 

  * type: [Date](#type-Date) 

* description 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

### type Port 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* port_number 

  * type: [Int](#type-Int) 

* status 

  * type: [String](#type-String) 

* protocol 

  * type: [String](#type-String) 

* description 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [ApplicationPortEdgeFilter](#type-ApplicationPortEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationPortEdgeSort]](#type-ApplicationPortEdgeSort) 

         > isArray: true 

  * type: [[ApplicationPortEdge]!](#type-ApplicationPortEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrPortEdgeFilter](#type-IpAddrPortEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrPortEdgeSort]](#type-IpAddrPortEdgeSort) 

         > isArray: true 

  * type: [[IpAddrPortEdge]!](#type-IpAddrPortEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* vulnerabilityEdges 

  * Arguments 

      * filter 

         > type: [PortVulnerabilityEdgeFilter](#type-PortVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[PortVulnerabilityEdgeSort]](#type-PortVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[PortVulnerabilityEdge]!](#type-PortVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* vulnerabilities 

  * Arguments 

      * filter 

         > type: [VulnerabilityFilter](#type-VulnerabilityFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[VulnerabilitySort]](#type-VulnerabilitySort) 

         > isArray: true 

  * type: [[Vulnerability]!](#type-Vulnerability) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagPortEdgeFilter](#type-TagPortEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagPortEdgeSort]](#type-TagPortEdgeSort) 

         > isArray: true 

  * type: [[TagPortEdge]!](#type-TagPortEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Source 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* description 

  * type: [String](#type-String) 

* product_link 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

### type Vulnerability 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* external_properties 

  * type: [Int](#type-Int) 

* external_reference 

  * type: [String](#type-String) 

* name 

  * type: [String](#type-String) 

* base_score 

  * type: [Float](#type-Float) 

* description 

  * type: [String](#type-String) 

* disclosed_on 

  * type: [Float](#type-Float) 

* published_on 

  * type: [Float](#type-Float) 

* updated_on 

  * type: [Float](#type-Float) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetVulnerabilityEdgeFilter](#type-AssetVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetVulnerabilityEdgeSort]](#type-AssetVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[AssetVulnerabilityEdge]!](#type-AssetVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [ApplicationVulnerabilityEdgeFilter](#type-ApplicationVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationVulnerabilityEdgeSort]](#type-ApplicationVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[ApplicationVulnerabilityEdge]!](#type-ApplicationVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* databaseEdges 

  * Arguments 

      * filter 

         > type: [DatabaseVulnerabilityEdgeFilter](#type-DatabaseVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseVulnerabilityEdgeSort]](#type-DatabaseVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[DatabaseVulnerabilityEdge]!](#type-DatabaseVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* databases 

  * Arguments 

      * filter 

         > type: [DatabaseFilter](#type-DatabaseFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseSort]](#type-DatabaseSort) 

         > isArray: true 

  * type: [[Database]!](#type-Database) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrVulnerabilityEdgeFilter](#type-IpAddrVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrVulnerabilityEdgeSort]](#type-IpAddrVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[IpAddrVulnerabilityEdge]!](#type-IpAddrVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* portEdges 

  * Arguments 

      * filter 

         > type: [PortVulnerabilityEdgeFilter](#type-PortVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[PortVulnerabilityEdgeSort]](#type-PortVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[PortVulnerabilityEdge]!](#type-PortVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* ports 

  * Arguments 

      * filter 

         > type: [PortFilter](#type-PortFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[PortSort]](#type-PortSort) 

         > isArray: true 

  * type: [[Port]!](#type-Port) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagVulnerabilityEdgeFilter](#type-TagVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagVulnerabilityEdgeSort]](#type-TagVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[TagVulnerabilityEdge]!](#type-TagVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type Tag 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [TagAssetEdgeFilter](#type-TagAssetEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagAssetEdgeSort]](#type-TagAssetEdgeSort) 

         > isArray: true 

  * type: [[TagAssetEdge]!](#type-TagAssetEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* containerEdges 

  * Arguments 

      * filter 

         > type: [TagContainerEdgeFilter](#type-TagContainerEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagContainerEdgeSort]](#type-TagContainerEdgeSort) 

         > isArray: true 

  * type: [[TagContainerEdge]!](#type-TagContainerEdge) 

  * isArray: true 

  * required: true 

* containers 

  * Arguments 

      * filter 

         > type: [ContainerFilter](#type-ContainerFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ContainerSort]](#type-ContainerSort) 

         > isArray: true 

  * type: [[Container]!](#type-Container) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [TagIpAddrEdgeFilter](#type-TagIpAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagIpAddrEdgeSort]](#type-TagIpAddrEdgeSort) 

         > isArray: true 

  * type: [[TagIpAddrEdge]!](#type-TagIpAddrEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* unifiedUserEdges 

  * Arguments 

      * filter 

         > type: [TagUnifiedUserEdgeFilter](#type-TagUnifiedUserEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagUnifiedUserEdgeSort]](#type-TagUnifiedUserEdgeSort) 

         > isArray: true 

  * type: [[TagUnifiedUserEdge]!](#type-TagUnifiedUserEdge) 

  * isArray: true 

  * required: true 

* unifiedUsers 

  * Arguments 

      * filter 

         > type: [UnifiedUserFilter](#type-UnifiedUserFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedUserSort]](#type-UnifiedUserSort) 

         > isArray: true 

  * type: [[UnifiedUser]!](#type-UnifiedUser) 

  * isArray: true 

  * required: true 

* userEdges 

  * Arguments 

      * filter 

         > type: [TagUserEdgeFilter](#type-TagUserEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagUserEdgeSort]](#type-TagUserEdgeSort) 

         > isArray: true 

  * type: [[TagUserEdge]!](#type-TagUserEdge) 

  * isArray: true 

  * required: true 

* users 

  * Arguments 

      * filter 

         > type: [UserFilter](#type-UserFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UserSort]](#type-UserSort) 

         > isArray: true 

  * type: [[User]!](#type-User) 

  * isArray: true 

  * required: true 

* unifiedAccountEdges 

  * Arguments 

      * filter 

         > type: [TagUnifiedAccountEdgeFilter](#type-TagUnifiedAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagUnifiedAccountEdgeSort]](#type-TagUnifiedAccountEdgeSort) 

         > isArray: true 

  * type: [[TagUnifiedAccountEdge]!](#type-TagUnifiedAccountEdge) 

  * isArray: true 

  * required: true 

* unifiedAccounts 

  * Arguments 

      * filter 

         > type: [UnifiedAccountFilter](#type-UnifiedAccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[UnifiedAccountSort]](#type-UnifiedAccountSort) 

         > isArray: true 

  * type: [[UnifiedAccount]!](#type-UnifiedAccount) 

  * isArray: true 

  * required: true 

* accountEdges 

  * Arguments 

      * filter 

         > type: [TagAccountEdgeFilter](#type-TagAccountEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagAccountEdgeSort]](#type-TagAccountEdgeSort) 

         > isArray: true 

  * type: [[TagAccountEdge]!](#type-TagAccountEdge) 

  * isArray: true 

  * required: true 

* accounts 

  * Arguments 

      * filter 

         > type: [AccountFilter](#type-AccountFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AccountSort]](#type-AccountSort) 

         > isArray: true 

  * type: [[Account]!](#type-Account) 

  * isArray: true 

  * required: true 

* applicationEdges 

  * Arguments 

      * filter 

         > type: [TagApplicationEdgeFilter](#type-TagApplicationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagApplicationEdgeSort]](#type-TagApplicationEdgeSort) 

         > isArray: true 

  * type: [[TagApplicationEdge]!](#type-TagApplicationEdge) 

  * isArray: true 

  * required: true 

* applications 

  * Arguments 

      * filter 

         > type: [ApplicationFilter](#type-ApplicationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[ApplicationSort]](#type-ApplicationSort) 

         > isArray: true 

  * type: [[Application]!](#type-Application) 

  * isArray: true 

  * required: true 

* hostnameEdges 

  * Arguments 

      * filter 

         > type: [TagHostnameEdgeFilter](#type-TagHostnameEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagHostnameEdgeSort]](#type-TagHostnameEdgeSort) 

         > isArray: true 

  * type: [[TagHostnameEdge]!](#type-TagHostnameEdge) 

  * isArray: true 

  * required: true 

* hostnames 

  * Arguments 

      * filter 

         > type: [HostnameFilter](#type-HostnameFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[HostnameSort]](#type-HostnameSort) 

         > isArray: true 

  * type: [[Hostname]!](#type-Hostname) 

  * isArray: true 

  * required: true 

* businessprocessEdges 

  * Arguments 

      * filter 

         > type: [TagBusinessprocessEdgeFilter](#type-TagBusinessprocessEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagBusinessprocessEdgeSort]](#type-TagBusinessprocessEdgeSort) 

         > isArray: true 

  * type: [[TagBusinessprocessEdge]!](#type-TagBusinessprocessEdge) 

  * isArray: true 

  * required: true 

* businessprocesses 

  * Arguments 

      * filter 

         > type: [BusinessprocessFilter](#type-BusinessprocessFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[BusinessprocessSort]](#type-BusinessprocessSort) 

         > isArray: true 

  * type: [[Businessprocess]!](#type-Businessprocess) 

  * isArray: true 

  * required: true 

* databaseEdges 

  * Arguments 

      * filter 

         > type: [TagDatabaseEdgeFilter](#type-TagDatabaseEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagDatabaseEdgeSort]](#type-TagDatabaseEdgeSort) 

         > isArray: true 

  * type: [[TagDatabaseEdge]!](#type-TagDatabaseEdge) 

  * isArray: true 

  * required: true 

* databases 

  * Arguments 

      * filter 

         > type: [DatabaseFilter](#type-DatabaseFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[DatabaseSort]](#type-DatabaseSort) 

         > isArray: true 

  * type: [[Database]!](#type-Database) 

  * isArray: true 

  * required: true 

* macAddrEdges 

  * Arguments 

      * filter 

         > type: [TagMacAddrEdgeFilter](#type-TagMacAddrEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagMacAddrEdgeSort]](#type-TagMacAddrEdgeSort) 

         > isArray: true 

  * type: [[TagMacAddrEdge]!](#type-TagMacAddrEdge) 

  * isArray: true 

  * required: true 

* macAddrs 

  * Arguments 

      * filter 

         > type: [MacAddrFilter](#type-MacAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[MacAddrSort]](#type-MacAddrSort) 

         > isArray: true 

  * type: [[MacAddr]!](#type-MacAddr) 

  * isArray: true 

  * required: true 

* portEdges 

  * Arguments 

      * filter 

         > type: [TagPortEdgeFilter](#type-TagPortEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagPortEdgeSort]](#type-TagPortEdgeSort) 

         > isArray: true 

  * type: [[TagPortEdge]!](#type-TagPortEdge) 

  * isArray: true 

  * required: true 

* ports 

  * Arguments 

      * filter 

         > type: [PortFilter](#type-PortFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[PortSort]](#type-PortSort) 

         > isArray: true 

  * type: [[Port]!](#type-Port) 

  * isArray: true 

  * required: true 

* vulnerabilityEdges 

  * Arguments 

      * filter 

         > type: [TagVulnerabilityEdgeFilter](#type-TagVulnerabilityEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagVulnerabilityEdgeSort]](#type-TagVulnerabilityEdgeSort) 

         > isArray: true 

  * type: [[TagVulnerabilityEdge]!](#type-TagVulnerabilityEdge) 

  * isArray: true 

  * required: true 

* vulnerabilities 

  * Arguments 

      * filter 

         > type: [VulnerabilityFilter](#type-VulnerabilityFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[VulnerabilitySort]](#type-VulnerabilitySort) 

         > isArray: true 

  * type: [[Vulnerability]!](#type-Vulnerability) 

  * isArray: true 

  * required: true 

* geolocationEdges 

  * Arguments 

      * filter 

         > type: [TagGeolocationEdgeFilter](#type-TagGeolocationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagGeolocationEdgeSort]](#type-TagGeolocationEdgeSort) 

         > isArray: true 

  * type: [[TagGeolocationEdge]!](#type-TagGeolocationEdge) 

  * isArray: true 

  * required: true 

* geolocations 

  * Arguments 

      * filter 

         > type: [GeolocationFilter](#type-GeolocationFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[GeolocationSort]](#type-GeolocationSort) 

         > isArray: true 

  * type: [[Geolocation]!](#type-Geolocation) 

  * isArray: true 

  * required: true 

### type Geolocation 

* key 

  * type: [ID!](#type-ID) 

  * required: true 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* region 

  * type: [String](#type-String) 

* longitude 

  * type: [Float](#type-Float) 

* latitude 

  * type: [Float](#type-Float) 

* description 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * isArray: true 

  * type: [[String]](#type-String) 

* untag 

  * isArray: true 

  * type: [[String]](#type-String) 

* source 

  * type: [String](#type-String) 

* assetEdges 

  * Arguments 

      * filter 

         > type: [AssetGeolocationEdgeFilter](#type-AssetGeolocationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetGeolocationEdgeSort]](#type-AssetGeolocationEdgeSort) 

         > isArray: true 

  * type: [[AssetGeolocationEdge]!](#type-AssetGeolocationEdge) 

  * isArray: true 

  * required: true 

* assets 

  * Arguments 

      * filter 

         > type: [AssetFilter](#type-AssetFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[AssetSort]](#type-AssetSort) 

         > isArray: true 

  * type: [[Asset]!](#type-Asset) 

  * isArray: true 

  * required: true 

* ipAddrEdges 

  * Arguments 

      * filter 

         > type: [IpAddrGeolocationEdgeFilter](#type-IpAddrGeolocationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrGeolocationEdgeSort]](#type-IpAddrGeolocationEdgeSort) 

         > isArray: true 

  * type: [[IpAddrGeolocationEdge]!](#type-IpAddrGeolocationEdge) 

  * isArray: true 

  * required: true 

* ipAddrs 

  * Arguments 

      * filter 

         > type: [IpAddrFilter](#type-IpAddrFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[IpAddrSort]](#type-IpAddrSort) 

         > isArray: true 

  * type: [[IpAddr]!](#type-IpAddr) 

  * isArray: true 

  * required: true 

* tagEdges 

  * Arguments 

      * filter 

         > type: [TagGeolocationEdgeFilter](#type-TagGeolocationEdgeFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagGeolocationEdgeSort]](#type-TagGeolocationEdgeSort) 

         > isArray: true 

  * type: [[TagGeolocationEdge]!](#type-TagGeolocationEdge) 

  * isArray: true 

  * required: true 

* tags 

  * Arguments 

      * filter 

         > type: [TagFilter](#type-TagFilter) 

         > isArray: false 

      * limit 

         > type: [Int](#type-Int) 

         > isArray: false 

      * offset 

         > type: [Int](#type-Int) 

         > isArray: false 

      * orderBy 

         > type: [[TagSort]](#type-TagSort) 

         > isArray: true 

  * type: [[Tag]!](#type-Tag) 

  * isArray: true 

  * required: true 

### type AssetVulnerabilityEdgePort 

* port_number 

  * type: [Float](#type-Float) 

* protocol 

  * type: [String](#type-String) 

* status 

  * type: [String](#type-String) 

### type AssetVulnerabilityEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* port 

  * type: [AssetVulnerabilityEdgePort](#type-AssetVulnerabilityEdgePort) 

* risk_score 

  * type: [Float](#type-Float) 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* vulnerability 

  * type: [Vulnerability!](#type-Vulnerability) 

  * required: true 

### type AssetIpAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

### type AssetMacAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* macAddr 

  * type: [MacAddr!](#type-MacAddr) 

  * required: true 

### type AssetHostnameEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* hostname 

  * type: [Hostname!](#type-Hostname) 

  * required: true 

### type AssetAccountEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

### type AssetContainerEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* container 

  * type: [Container!](#type-Container) 

  * required: true 

### type AssetApplicationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

### type AssetDatabaseEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* database 

  * type: [Database!](#type-Database) 

  * required: true 

### type AssetGeolocationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

* geolocation 

  * type: [Geolocation!](#type-Geolocation) 

  * required: true 

### type ApplicationPortEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

* port 

  * type: [Port!](#type-Port) 

  * required: true 

### type AccountApplicationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* user_id 

  * type: [String](#type-String) 

* last_access_time 

  * type: [Float](#type-Float) 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

### type ApplicationIpAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* mappingtype 

  * type: [String](#type-String) 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

### type BusinessprocessApplicationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* businessprocess 

  * type: [Businessprocess!](#type-Businessprocess) 

  * required: true 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

### type BusinessprocessAccountEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* businessprocess 

  * type: [Businessprocess!](#type-Businessprocess) 

  * required: true 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

### type ApplicationDatabaseEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

* database 

  * type: [Database!](#type-Database) 

  * required: true 

### type ApplicationVulnerabilityEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

* vulnerability 

  * type: [Vulnerability!](#type-Vulnerability) 

  * required: true 

### type DatabaseIpAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* database 

  * type: [Database!](#type-Database) 

  * required: true 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

### type DatabaseVulnerabilityEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* version_level 

  * type: [String](#type-String) 

* patch_level 

  * type: [String](#type-String) 

* full_version_info 

  * type: [String](#type-String) 

* result_text 

  * type: [String](#type-String) 

* recommendation 

  * type: [String](#type-String) 

* severity 

  * type: [String](#type-String) 

* category 

  * type: [String](#type-String) 

* assessment_description 

  * type: [String](#type-String) 

* result_details 

  * type: [String](#type-String) 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* database 

  * type: [Database!](#type-Database) 

  * required: true 

* vulnerability 

  * type: [Vulnerability!](#type-Vulnerability) 

  * required: true 

### type IpAddrContainerEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

* container 

  * type: [Container!](#type-Container) 

  * required: true 

### type IpAddrMacAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

* macAddr 

  * type: [MacAddr!](#type-MacAddr) 

  * required: true 

### type IpAddrHostnameEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

* hostname 

  * type: [Hostname!](#type-Hostname) 

  * required: true 

### type IpAddrVulnerabilityEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

* vulnerability 

  * type: [Vulnerability!](#type-Vulnerability) 

  * required: true 

### type IpAddrGeolocationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

* geolocation 

  * type: [Geolocation!](#type-Geolocation) 

  * required: true 

### type IpAddrPortEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

* port 

  * type: [Port!](#type-Port) 

  * required: true 

### type UserAccountEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* last_access_time 

  * type: [Float](#type-Float) 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* user 

  * type: [User!](#type-User) 

  * required: true 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

### type AccountDatabaseEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

* database 

  * type: [Database!](#type-Database) 

  * required: true 

### type AccountHostnameEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

* hostname 

  * type: [Hostname!](#type-Hostname) 

  * required: true 

### type AccountIpAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* total_risk_score 

  * type: [Float](#type-Float) 

* threat_analytics_score 

  * type: [Float](#type-Float) 

* violations_score 

  * type: [Float](#type-Float) 

* vulnerability_score 

  * type: [Float](#type-Float) 

* sensitive_objects_score 

  * type: [Float](#type-Float) 

* select_queries_score 

  * type: [Float](#type-Float) 

* ddl_queries_score 

  * type: [Float](#type-Float) 

* dml_queries_score 

  * type: [Float](#type-Float) 

* administrative_queries_score 

  * type: [Float](#type-Float) 

* high_volume_activity_score 

  * type: [Float](#type-Float) 

* off_work_activity_score 

  * type: [Float](#type-Float) 

* group_state_description 

  * type: [String](#type-String) 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

### type UnifiedAccountAccountEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* unifiedAccount 

  * type: [UnifiedAccount!](#type-UnifiedAccount) 

  * required: true 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

### type UnifiedUserUserEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* unifiedUser 

  * type: [UnifiedUser!](#type-UnifiedUser) 

  * required: true 

* user 

  * type: [User!](#type-User) 

  * required: true 

### type PortVulnerabilityEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* port 

  * type: [Port!](#type-Port) 

  * required: true 

* vulnerability 

  * type: [Vulnerability!](#type-Vulnerability) 

  * required: true 

### type TagAssetEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* asset 

  * type: [Asset!](#type-Asset) 

  * required: true 

### type TagContainerEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* container 

  * type: [Container!](#type-Container) 

  * required: true 

### type TagIpAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* ipAddr 

  * type: [IpAddr!](#type-IpAddr) 

  * required: true 

### type TagUnifiedUserEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* unifiedUser 

  * type: [UnifiedUser!](#type-UnifiedUser) 

  * required: true 

### type TagUserEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* user 

  * type: [User!](#type-User) 

  * required: true 

### type TagUnifiedAccountEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* unifiedAccount 

  * type: [UnifiedAccount!](#type-UnifiedAccount) 

  * required: true 

### type TagAccountEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* account 

  * type: [Account!](#type-Account) 

  * required: true 

### type TagApplicationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* application 

  * type: [Application!](#type-Application) 

  * required: true 

### type TagHostnameEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* hostname 

  * type: [Hostname!](#type-Hostname) 

  * required: true 

### type TagBusinessprocessEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* businessprocess 

  * type: [Businessprocess!](#type-Businessprocess) 

  * required: true 

### type TagDatabaseEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* database 

  * type: [Database!](#type-Database) 

  * required: true 

### type TagMacAddrEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* macAddr 

  * type: [MacAddr!](#type-MacAddr) 

  * required: true 

### type TagPortEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* port 

  * type: [Port!](#type-Port) 

  * required: true 

### type TagVulnerabilityEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* vulnerability 

  * type: [Vulnerability!](#type-Vulnerability) 

  * required: true 

### type TagGeolocationEdge 

* _id 

  * type: [ID!](#type-ID) 

  * required: true 

* _from 

  * type: [ID!](#type-ID) 

  * required: true 

* _to 

  * type: [ID!](#type-ID) 

  * required: true 

* source 

  * type: [String!](#type-String) 

  * required: true 

* report 

  * type: [String!](#type-String) 

  * required: true 

* customProperties 

  * Arguments 

      * filter 

         > type: [CustomPropertiesFilter](#type-CustomPropertiesFilter) 

         > isArray: false 

  * type: [JSON!](#type-JSON) 

  * required: true 

* created 

  * type: [Date](#type-Date) 

* modified 

  * type: [Date](#type-Date) 

* external_id 

  * type: [String](#type-String) 

* _created 

  * type: [Date](#type-Date) 

* _modified 

  * type: [Date](#type-Date) 

* _deleted 

  * type: [Date](#type-Date) 

* tag 

  * type: [Tag!](#type-Tag) 

  * required: true 

* geolocation 

  * type: [Geolocation!](#type-Geolocation) 

  * required: true 

### type GlobalFilter 

* AND 

  * type: [[GlobalFilter]](#type-GlobalFilter) 

  * isArray: true 

* OR 

  * type: [[GlobalFilter]](#type-GlobalFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type CustomPropertiesFilter 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* id_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* id_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* id_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

### type AssetFilter 

* AND 

  * type: [[AssetFilter]](#type-AssetFilter) 

  * isArray: true 

* OR 

  * type: [[AssetFilter]](#type-AssetFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* name_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* name_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* name_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type ContainerFilter 

* AND 

  * type: [[ContainerFilter]](#type-ContainerFilter) 

  * isArray: true 

* OR 

  * type: [[ContainerFilter]](#type-ContainerFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type IpAddrFilter 

* AND 

  * type: [[IpAddrFilter]](#type-IpAddrFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrFilter]](#type-IpAddrFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type UnifiedUserFilter 

* AND 

  * type: [[UnifiedUserFilter]](#type-UnifiedUserFilter) 

  * isArray: true 

* OR 

  * type: [[UnifiedUserFilter]](#type-UnifiedUserFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type UserFilter 

* AND 

  * type: [[UserFilter]](#type-UserFilter) 

  * isArray: true 

* OR 

  * type: [[UserFilter]](#type-UserFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* fullname_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* fullname_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* fullname_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* email_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* email_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* email_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* employee_id_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* employee_id_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* employee_id_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* department_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* department_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* department_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type UnifiedAccountFilter 

* AND 

  * type: [[UnifiedAccountFilter]](#type-UnifiedAccountFilter) 

  * isArray: true 

* OR 

  * type: [[UnifiedAccountFilter]](#type-UnifiedAccountFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* name_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* name_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* name_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type AccountFilter 

* AND 

  * type: [[AccountFilter]](#type-AccountFilter) 

  * isArray: true 

* OR 

  * type: [[AccountFilter]](#type-AccountFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* name_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* name_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* name_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type ApplicationFilter 

* AND 

  * type: [[ApplicationFilter]](#type-ApplicationFilter) 

  * isArray: true 

* OR 

  * type: [[ApplicationFilter]](#type-ApplicationFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* name_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* name_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* name_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type HostnameFilter 

* AND 

  * type: [[HostnameFilter]](#type-HostnameFilter) 

  * isArray: true 

* OR 

  * type: [[HostnameFilter]](#type-HostnameFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type BusinessprocessFilter 

* AND 

  * type: [[BusinessprocessFilter]](#type-BusinessprocessFilter) 

  * isArray: true 

* OR 

  * type: [[BusinessprocessFilter]](#type-BusinessprocessFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* name_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* name_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* name_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type DatabaseFilter 

* AND 

  * type: [[DatabaseFilter]](#type-DatabaseFilter) 

  * isArray: true 

* OR 

  * type: [[DatabaseFilter]](#type-DatabaseFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* name_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* name_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* name_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type MacAddrFilter 

* AND 

  * type: [[MacAddrFilter]](#type-MacAddrFilter) 

  * isArray: true 

* OR 

  * type: [[MacAddrFilter]](#type-MacAddrFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type ReportFilter 

* AND 

  * type: [[ReportFilter]](#type-ReportFilter) 

  * isArray: true 

* OR 

  * type: [[ReportFilter]](#type-ReportFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type PortFilter 

* AND 

  * type: [[PortFilter]](#type-PortFilter) 

  * isArray: true 

* OR 

  * type: [[PortFilter]](#type-PortFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type SourceFilter 

* AND 

  * type: [[SourceFilter]](#type-SourceFilter) 

  * isArray: true 

* OR 

  * type: [[SourceFilter]](#type-SourceFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type VulnerabilityFilter 

* AND 

  * type: [[VulnerabilityFilter]](#type-VulnerabilityFilter) 

  * isArray: true 

* OR 

  * type: [[VulnerabilityFilter]](#type-VulnerabilityFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type TagFilter 

* AND 

  * type: [[TagFilter]](#type-TagFilter) 

  * isArray: true 

* OR 

  * type: [[TagFilter]](#type-TagFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type GeolocationFilter 

* AND 

  * type: [[GeolocationFilter]](#type-GeolocationFilter) 

  * isArray: true 

* OR 

  * type: [[GeolocationFilter]](#type-GeolocationFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* key_EQ 

  * type: [ID](#type-ID) 

  * isArray: false 

* key_IN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

* key_NOTIN 

  * type: [[ID]](#type-ID) 

  * isArray: true 

### type AssetVulnerabilityEdgeFilter 

* AND 

  * type: [[AssetVulnerabilityEdgeFilter]](#type-AssetVulnerabilityEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetVulnerabilityEdgeFilter]](#type-AssetVulnerabilityEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetVulnerabilityEdgePortFilter 

* AND 

  * type: [[AssetVulnerabilityEdgePortFilter]](#type-AssetVulnerabilityEdgePortFilter) 

  * isArray: true 

* OR 

  * type: [[AssetVulnerabilityEdgePortFilter]](#type-AssetVulnerabilityEdgePortFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetIpAddrEdgeFilter 

* AND 

  * type: [[AssetIpAddrEdgeFilter]](#type-AssetIpAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetIpAddrEdgeFilter]](#type-AssetIpAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetMacAddrEdgeFilter 

* AND 

  * type: [[AssetMacAddrEdgeFilter]](#type-AssetMacAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetMacAddrEdgeFilter]](#type-AssetMacAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetHostnameEdgeFilter 

* AND 

  * type: [[AssetHostnameEdgeFilter]](#type-AssetHostnameEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetHostnameEdgeFilter]](#type-AssetHostnameEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetAccountEdgeFilter 

* AND 

  * type: [[AssetAccountEdgeFilter]](#type-AssetAccountEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetAccountEdgeFilter]](#type-AssetAccountEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetContainerEdgeFilter 

* AND 

  * type: [[AssetContainerEdgeFilter]](#type-AssetContainerEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetContainerEdgeFilter]](#type-AssetContainerEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetApplicationEdgeFilter 

* AND 

  * type: [[AssetApplicationEdgeFilter]](#type-AssetApplicationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetApplicationEdgeFilter]](#type-AssetApplicationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetDatabaseEdgeFilter 

* AND 

  * type: [[AssetDatabaseEdgeFilter]](#type-AssetDatabaseEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetDatabaseEdgeFilter]](#type-AssetDatabaseEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetGeolocationEdgeFilter 

* AND 

  * type: [[AssetGeolocationEdgeFilter]](#type-AssetGeolocationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AssetGeolocationEdgeFilter]](#type-AssetGeolocationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type ApplicationPortEdgeFilter 

* AND 

  * type: [[ApplicationPortEdgeFilter]](#type-ApplicationPortEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[ApplicationPortEdgeFilter]](#type-ApplicationPortEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AccountApplicationEdgeFilter 

* AND 

  * type: [[AccountApplicationEdgeFilter]](#type-AccountApplicationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AccountApplicationEdgeFilter]](#type-AccountApplicationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type ApplicationIpAddrEdgeFilter 

* AND 

  * type: [[ApplicationIpAddrEdgeFilter]](#type-ApplicationIpAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[ApplicationIpAddrEdgeFilter]](#type-ApplicationIpAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type BusinessprocessApplicationEdgeFilter 

* AND 

  * type: [[BusinessprocessApplicationEdgeFilter]](#type-BusinessprocessApplicationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[BusinessprocessApplicationEdgeFilter]](#type-BusinessprocessApplicationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type BusinessprocessAccountEdgeFilter 

* AND 

  * type: [[BusinessprocessAccountEdgeFilter]](#type-BusinessprocessAccountEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[BusinessprocessAccountEdgeFilter]](#type-BusinessprocessAccountEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type ApplicationDatabaseEdgeFilter 

* AND 

  * type: [[ApplicationDatabaseEdgeFilter]](#type-ApplicationDatabaseEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[ApplicationDatabaseEdgeFilter]](#type-ApplicationDatabaseEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type ApplicationVulnerabilityEdgeFilter 

* AND 

  * type: [[ApplicationVulnerabilityEdgeFilter]](#type-ApplicationVulnerabilityEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[ApplicationVulnerabilityEdgeFilter]](#type-ApplicationVulnerabilityEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type DatabaseIpAddrEdgeFilter 

* AND 

  * type: [[DatabaseIpAddrEdgeFilter]](#type-DatabaseIpAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[DatabaseIpAddrEdgeFilter]](#type-DatabaseIpAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type DatabaseVulnerabilityEdgeFilter 

* AND 

  * type: [[DatabaseVulnerabilityEdgeFilter]](#type-DatabaseVulnerabilityEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[DatabaseVulnerabilityEdgeFilter]](#type-DatabaseVulnerabilityEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type IpAddrContainerEdgeFilter 

* AND 

  * type: [[IpAddrContainerEdgeFilter]](#type-IpAddrContainerEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrContainerEdgeFilter]](#type-IpAddrContainerEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type IpAddrMacAddrEdgeFilter 

* AND 

  * type: [[IpAddrMacAddrEdgeFilter]](#type-IpAddrMacAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrMacAddrEdgeFilter]](#type-IpAddrMacAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type IpAddrHostnameEdgeFilter 

* AND 

  * type: [[IpAddrHostnameEdgeFilter]](#type-IpAddrHostnameEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrHostnameEdgeFilter]](#type-IpAddrHostnameEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type IpAddrVulnerabilityEdgeFilter 

* AND 

  * type: [[IpAddrVulnerabilityEdgeFilter]](#type-IpAddrVulnerabilityEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrVulnerabilityEdgeFilter]](#type-IpAddrVulnerabilityEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type IpAddrGeolocationEdgeFilter 

* AND 

  * type: [[IpAddrGeolocationEdgeFilter]](#type-IpAddrGeolocationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrGeolocationEdgeFilter]](#type-IpAddrGeolocationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type IpAddrPortEdgeFilter 

* AND 

  * type: [[IpAddrPortEdgeFilter]](#type-IpAddrPortEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[IpAddrPortEdgeFilter]](#type-IpAddrPortEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type UserAccountEdgeFilter 

* AND 

  * type: [[UserAccountEdgeFilter]](#type-UserAccountEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[UserAccountEdgeFilter]](#type-UserAccountEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AccountDatabaseEdgeFilter 

* AND 

  * type: [[AccountDatabaseEdgeFilter]](#type-AccountDatabaseEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AccountDatabaseEdgeFilter]](#type-AccountDatabaseEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AccountHostnameEdgeFilter 

* AND 

  * type: [[AccountHostnameEdgeFilter]](#type-AccountHostnameEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AccountHostnameEdgeFilter]](#type-AccountHostnameEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AccountIpAddrEdgeFilter 

* AND 

  * type: [[AccountIpAddrEdgeFilter]](#type-AccountIpAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[AccountIpAddrEdgeFilter]](#type-AccountIpAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type UnifiedAccountAccountEdgeFilter 

* AND 

  * type: [[UnifiedAccountAccountEdgeFilter]](#type-UnifiedAccountAccountEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[UnifiedAccountAccountEdgeFilter]](#type-UnifiedAccountAccountEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type UnifiedUserUserEdgeFilter 

* AND 

  * type: [[UnifiedUserUserEdgeFilter]](#type-UnifiedUserUserEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[UnifiedUserUserEdgeFilter]](#type-UnifiedUserUserEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type PortVulnerabilityEdgeFilter 

* AND 

  * type: [[PortVulnerabilityEdgeFilter]](#type-PortVulnerabilityEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[PortVulnerabilityEdgeFilter]](#type-PortVulnerabilityEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagAssetEdgeFilter 

* AND 

  * type: [[TagAssetEdgeFilter]](#type-TagAssetEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagAssetEdgeFilter]](#type-TagAssetEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagContainerEdgeFilter 

* AND 

  * type: [[TagContainerEdgeFilter]](#type-TagContainerEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagContainerEdgeFilter]](#type-TagContainerEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagIpAddrEdgeFilter 

* AND 

  * type: [[TagIpAddrEdgeFilter]](#type-TagIpAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagIpAddrEdgeFilter]](#type-TagIpAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagUnifiedUserEdgeFilter 

* AND 

  * type: [[TagUnifiedUserEdgeFilter]](#type-TagUnifiedUserEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagUnifiedUserEdgeFilter]](#type-TagUnifiedUserEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagUserEdgeFilter 

* AND 

  * type: [[TagUserEdgeFilter]](#type-TagUserEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagUserEdgeFilter]](#type-TagUserEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagUnifiedAccountEdgeFilter 

* AND 

  * type: [[TagUnifiedAccountEdgeFilter]](#type-TagUnifiedAccountEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagUnifiedAccountEdgeFilter]](#type-TagUnifiedAccountEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagAccountEdgeFilter 

* AND 

  * type: [[TagAccountEdgeFilter]](#type-TagAccountEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagAccountEdgeFilter]](#type-TagAccountEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagApplicationEdgeFilter 

* AND 

  * type: [[TagApplicationEdgeFilter]](#type-TagApplicationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagApplicationEdgeFilter]](#type-TagApplicationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagHostnameEdgeFilter 

* AND 

  * type: [[TagHostnameEdgeFilter]](#type-TagHostnameEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagHostnameEdgeFilter]](#type-TagHostnameEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagBusinessprocessEdgeFilter 

* AND 

  * type: [[TagBusinessprocessEdgeFilter]](#type-TagBusinessprocessEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagBusinessprocessEdgeFilter]](#type-TagBusinessprocessEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagDatabaseEdgeFilter 

* AND 

  * type: [[TagDatabaseEdgeFilter]](#type-TagDatabaseEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagDatabaseEdgeFilter]](#type-TagDatabaseEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagMacAddrEdgeFilter 

* AND 

  * type: [[TagMacAddrEdgeFilter]](#type-TagMacAddrEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagMacAddrEdgeFilter]](#type-TagMacAddrEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagPortEdgeFilter 

* AND 

  * type: [[TagPortEdgeFilter]](#type-TagPortEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagPortEdgeFilter]](#type-TagPortEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagVulnerabilityEdgeFilter 

* AND 

  * type: [[TagVulnerabilityEdgeFilter]](#type-TagVulnerabilityEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagVulnerabilityEdgeFilter]](#type-TagVulnerabilityEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type TagGeolocationEdgeFilter 

* AND 

  * type: [[TagGeolocationEdgeFilter]](#type-TagGeolocationEdgeFilter) 

  * isArray: true 

* OR 

  * type: [[TagGeolocationEdgeFilter]](#type-TagGeolocationEdgeFilter) 

  * isArray: true 

* AT 

  * type: [Date](#type-Date) 

  * isArray: false 

* source_EQ 

  * type: [String](#type-String) 

  * isArray: false 

* source_IN 

  * type: [[String]](#type-String) 

  * isArray: true 

* source_NOTIN 

  * type: [[String]](#type-String) 

  * isArray: true 

* _created_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _created_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _modified_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_EQ 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_GTE 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LT 

  * type: [Date](#type-Date) 

  * isArray: false 

* _deleted_LTE 

  * type: [Date](#type-Date) 

  * isArray: false 

### type AssetSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* business_value 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* risk 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ContainerSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type UnifiedUserSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type UserSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* fullname 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* job_title 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* employee_id 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* department 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* cumulative_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* current_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type UnifiedAccountSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AccountSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* cumulative_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* current_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ApplicationSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* last_access_time 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* threat_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* cumulative_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* current_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type HostnameSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* host_name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type BusinessprocessSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type DatabaseSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type MacAddrSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ReportSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type PortSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type SourceSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type VulnerabilitySort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* name 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* base_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type GeolocationSort 

* key 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetVulnerabilityEdgeSort 

* risk_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetIpAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetMacAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetHostnameEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetAccountEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetContainerEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetApplicationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetDatabaseEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AssetGeolocationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ApplicationPortEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AccountApplicationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ApplicationIpAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type BusinessprocessApplicationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type BusinessprocessAccountEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ApplicationDatabaseEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type ApplicationVulnerabilityEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type DatabaseIpAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type DatabaseVulnerabilityEdgeSort 

* severity 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrContainerEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrMacAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrHostnameEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrVulnerabilityEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrGeolocationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type IpAddrPortEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type UserAccountEdgeSort 

* last_access_time 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AccountDatabaseEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AccountHostnameEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type AccountIpAddrEdgeSort 

* total_risk_score 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type UnifiedAccountAccountEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type UnifiedUserUserEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type PortVulnerabilityEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagAssetEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagContainerEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagIpAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagUnifiedUserEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagUserEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagUnifiedAccountEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagAccountEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagApplicationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagHostnameEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagBusinessprocessEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagDatabaseEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagMacAddrEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagPortEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagVulnerabilityEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type TagGeolocationEdgeSort 

* source 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _created 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _modified 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

* _deleted 

  * type: [SortDirection](#type-SortDirection) 

  * required: false 

  * isArray: false 

### type SortDirection 

  * enum: asc | desc 

