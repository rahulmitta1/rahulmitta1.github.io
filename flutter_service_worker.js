'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "0d251f3473b8bec4f9cc2fbfdc845c74",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e82e8cf7e5c194403575526f9d308b12",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "87ecc3186e3c0f48d9690d3fe8fd2faa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "177776555b33898b4a9994a9219c05b7",
".git/logs/refs/heads/main": "177776555b33898b4a9994a9219c05b7",
".git/logs/refs/remotes/origin/HEAD": "0eeb4ba42504f6732a1fb90e8f81e2c0",
".git/logs/refs/remotes/origin/main": "9200b32d1c31ff0078e6f8c0eda11b20",
".git/objects/02/b425b0c4eb7e0aa46ae6e8a0c4ea7d70ca56aa": "a3f45c7ad612f1d134f7195ac8996eca",
".git/objects/05/5cceafbfd5f57716a88fd41d920578d2561de5": "dd02c388b884c3eba1395e480390325d",
".git/objects/07/d52ff03271c0fd9d8105634c61d0aa1b91bb7e": "015ee69c10c96e52a5a0dfc2159a0386",
".git/objects/08/acef942d76208bbec4bccd3a2d10605e92412e": "980126e977098e8bf0602d28d1d30738",
".git/objects/09/498d77a6c02a8e6ecc8afc4e4afebf0e3d594b": "8b10be78626eef0776caf1efb5846cf4",
".git/objects/0c/e661c4e8bed1fe5650e198e17885bba06846c2": "56a73d4813964a5a8d8b102c64721672",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/9d7d961d519b06f1eeb58ff523a8c25b891cb0": "546d1a727c3e9c02c988c65cb0057d10",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/007c90ccfec5eab8749c57b1d21f066f41faba": "0a42f98c228e670afb01c0925cf50e68",
".git/objects/12/afc0521279bf3bc0120ef66a006df806bb9213": "0b944e8be72cb630babe3d61ae1534c5",
".git/objects/14/49a58df5308c4ee0683f869a0258c03d76c68d": "141244a023493c5d962c7bb4135afaba",
".git/objects/16/91c6aba49f9cd04f92242ddbc86c7969906736": "fd7cdf8e8214e316b5a34c40f691cfab",
".git/objects/17/d59ce0681c57e6b515db1c785f280f38e6fd89": "09a2144cd3bc4bd67f244ac2093d9cb7",
".git/objects/1a/caad1601ad2755e16761b6c4ab79e13bd86420": "331b938c9223e694f01f30fc64196f00",
".git/objects/1c/6dc8126bfbb4b39b4cf7e934226ac0d5dea7ce": "f78ea3f3284fdd4ad2a510599b9d5fc1",
".git/objects/1e/8e0970fe018237c0f4c0c79b0af379b5b3ec58": "ee10b00835a9c7f012a724cf54ba8743",
".git/objects/1e/e3673524f4af5a0e5b216792621faa6044b5bb": "f61d40868d5f533baf9e62852b64ac93",
".git/objects/1f/2485a6408f8a6c1f05609fb1c23479fa4fed0d": "799124496118e7a40de44714f68957ff",
".git/objects/20/74136d99e2c79a2611aec0e3e2eb5bde147fcd": "eaffb28be7cde502c58d2ae25e44e4ce",
".git/objects/21/2dbd79b3f0bfb57ccee2f222618a9d1e5c9cc5": "fae60a249950726a880dc6d09a19e4d9",
".git/objects/23/6978a32bec3506a7770c302b34e1fdc870496b": "12b04671fc4fec8c7097966eede639f8",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/2bfb763b507e2446ccdb30b46e1fd5e6a3ec50": "13bfd4fe25c2d2faf7df33e758fb84c1",
".git/objects/28/02495cdc8c157ea584a0696814731afb38ffff": "2e43b202e43c91e4eb37f7d08f26bc5b",
".git/objects/28/675b74e039eb8cf511cbef938de3651143af8d": "6ec365b6ac562afd6fcbc46a5586ee45",
".git/objects/2a/bbce8ce15af57d5d9d81d102d37cf2b3728a76": "25fbd53d3c00a907eec62174da34f7dd",
".git/objects/2b/0239dc2d61a13a1272fe4ec0421f0fea851799": "a15640a619a95dc3075ef93281d36f82",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/6469d2b2fbbd0b702ad1bef474689e4a0fdcd1": "456829621d10add8423bf6b718f0a424",
".git/objects/2f/7040f8af49be158e48a095938f78e5b7bd3d33": "9fa9f8dddea3339472716968df923fb3",
".git/objects/30/2e10ff70c0416ccecd73bafafb6c4a86b57269": "42cb541a1aa28d8e415fcb6f5f7a83d3",
".git/objects/33/3bc5a1a866fbad4f60ee50e24277f36b7ec751": "e26e311a3fc473968e51d7eab15cf6c5",
".git/objects/33/d236f32dac1b0b5d396b6fb975f797485f3bd0": "6709c749f4052b58d8eab554003dc4ca",
".git/objects/33/fd9530f28e3d1921477dc25c9fbf98edf9f8a7": "3ec7eb2feb5667bdc2ad4c54b0959f1b",
".git/objects/34/726ec85d3da69c5460cc3c2cd6df6208094577": "db5a0784101ec1955dbb4e130cc6c1cf",
".git/objects/34/aed2668b9b09fbf973d2c7728372436d722353": "010b7a25d8eb8a9660fa668394aca737",
".git/objects/34/e5e1ae417bc977cfc37a719eafcf6934e9b74e": "2eebdcd9dfa0ded6f240c802d118ee32",
".git/objects/38/465e5ae301b3ddefabfe22b188c4fee52182c0": "eebe5c7c15a8b55c3d09dbb81b38a9a6",
".git/objects/38/57443dd0b93a01100ab38459477ae98a0a507d": "6b25b663cc7b4f8531fd23654f5aa98e",
".git/objects/39/41c79f871ebc2a4b11bdeba62a8dca70aa41a2": "1e7c49283a38830cfc5e8f953a530171",
".git/objects/3a/3d11b7edb6ccc6200d1f318f49be3bfeb9154a": "654d5f942c49b75e7ce2a0288238fbcf",
".git/objects/3b/d96f2e40467217709ba87af5e90c1be85f1b48": "90fee53833fe08118742dd7722b755cf",
".git/objects/3c/0727e3dabcba9dfb70984bd833f48d24eee32f": "f7c44b3e0eaed6cea925dce1a3709b31",
".git/objects/3c/0c5953755825396048eb6ab0db635a9fec07e0": "4d4d85f075bb23c510c1c0aa19f6bc6c",
".git/objects/3e/44a82359898a8b958276e9b78845579c6e255e": "0514bff518ab102d06ada48d9888371e",
".git/objects/3f/e8ce58e4ab7705d193aaa73f7640388f2aa605": "3c7b51aff421a031ec20b8a69920f1f1",
".git/objects/40/c0da7640397b1a436c83d269add1122e79e6ff": "f19e6d8a754423f6bbbc9954dc359a6c",
".git/objects/41/0112f3d17936597a79ce39d9331ee4f8c29a9f": "1aec30e85655fdd724bf05996032bfbb",
".git/objects/41/c9d5191b33c5248cbe65626fae5cab1112025f": "b3d0745cf6476bce8a512c086ead726e",
".git/objects/43/fad1fd8796d3a9afd7556cc55b7a1ad6bca835": "5a3e5ce8fb4da9905db8411cd8e131f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/fcb40de79e5ecfa90cec7d2c4cd8ce70f3244b": "bf2cb54ae081a4f3b46949d68f9187d7",
".git/objects/48/4c01a2431be2518c29a2155a4ab7ba9ac8a655": "7a8718b35a91a4bb474dd1dcdf010702",
".git/objects/48/9da8b813a1851c4152b731af81ea5d1f33d993": "d353faf6dc3bceb047b1af940ea968ea",
".git/objects/48/f1bcb4209f478f907aff3b6f95cc7c05b83a38": "534742123c810900e6d561404a022635",
".git/objects/49/296c8f1f2c14e55e350e731a636c7d93293b32": "cb639215e0937ae98510224b368acf72",
".git/objects/49/e0136cc2f0e1f90c7e5f9b5b10c0d6d01dd1de": "ea9b56d6939460c9e5263266dab2c4c9",
".git/objects/4c/a7ae3b264e634e2150fc368e786449fd3e1688": "560d5ebec48b72441341d8f086ba65a0",
".git/objects/4d/488da525d5f1a598694a7174e3c2991674ee4e": "2d5291cbdbf9e517a9ac757cf024c9ee",
".git/objects/4d/644669d1a33759e43d3f9ce251fd30ac4c69d1": "ba5a290a476d3b515ce829d9dfd36044",
".git/objects/4d/dd13e7d466f28dd42ac0844a3ba254c0033ea9": "75dac4fb0c23171ed45dce4ef5b899b6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/c49bcd69feb1ebfad3e732621b39dae96cbc15": "9f1066a67a6193d4e0d0680bcdeaecb2",
".git/objects/4f/a28cff6e9ba93701c690ee73c976a99354b77f": "5d3588016e0b631747c67f21f545b87f",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/94d94ebf8d9cfdea9cf10dcec0569d3a56c964": "b6d2b72d863bfd5e06ef43ecbbcc054b",
".git/objects/52/a8ad724d5f8059d55ab3e5842bd794f8aa4254": "8c4c423494d852947f52eaec4279ff43",
".git/objects/54/1f6ff2ef911dd19fab43bfd77137640cf5eab5": "a997cf96e002a08d2afe4e95fedf2d39",
".git/objects/55/b8e2e0331c0ba3fb262b359d13f54f25ceffb9": "326734ffc48d65cfc541d46b52c78b48",
".git/objects/59/ce3f046775288afb0068ccb69c0d24e1c58401": "7b2c26cff538558469bcaecc02eee238",
".git/objects/5b/35f9143b3b92747c7c5ac0b2b1a9c09497159c": "2ae428577ebe2e12ef44cb96120fdff2",
".git/objects/5b/6d7b9c993d2b8af3c697e3580e4038164b23d3": "56677e0921a68944a38e41ee0238720d",
".git/objects/63/76f96f84d806f9ec8fac4f9d5fff45fef26a2a": "bdf68b3e3bf5a78a83eca28b65d8b258",
".git/objects/67/b27038c3f09d043928c35bb1480ec22563c70f": "fe81a35c677d7a0f3f5cd72d3d34b1e7",
".git/objects/68/5b593203f6949d022a21f78add35911bf5d050": "cd9d574559972242380c57a5fb39daf9",
".git/objects/69/96df67b3b12b523ab097f68e64898a6ca9a750": "b30f4807ae1709ad0caa8a14ce92d6db",
".git/objects/6b/0ce074e5501a5d4160d36a7240fd013a232049": "a6a267bb320e05fa6b7d44166948d59e",
".git/objects/6c/db07171077c101c7d4748e5b97a31c6032c23b": "b765a6dc997aa79d2f370a9cedac04c5",
".git/objects/6d/3d7582f697f8c21a1d7a6357ecf470610ca42c": "ac890781fc7deb5e320661cca4359efd",
".git/objects/6d/a6f23786baed83482a85f0d4e0f8d9d5ab3ff5": "bc1a0fe338f7da82e1e961079b6e253f",
".git/objects/6d/d6b624f449a30d46d39d257e656c70a71f1908": "a58f9c0caeb41b1db603b3a7a7585c61",
".git/objects/6f/10b9287777c1bb865e5958681eee5667f208a0": "e724ca820e9d8d13f63bc0583c94109a",
".git/objects/6f/3a2913e199cebe9ace75cf7e5a2818da27fbd3": "45159ad6d14348c955865d0f51914657",
".git/objects/71/eff5266432c3f13cc9956a17f25594b693acec": "24acf23725cfc8528d18dd74d7850648",
".git/objects/72/58a7614e35dccbc25195b09fb91211878a4bd2": "d980032c5def2dac7421b4a8fdbb25f4",
".git/objects/73/49f2da92c7da7ed9891714579006f2b0a1d215": "31000372cb1fdc6a65f0033ca4ab0bed",
".git/objects/73/d5e8068d58363868663ce11682156b1d0d5dc6": "f436909297ea9672d3e2f3a9c2b4732a",
".git/objects/74/d59977dbc140496171959c9dbc97afe633ceaf": "6747d47eae2dc943cc6201d6a5b997c9",
".git/objects/75/0f06274b258640b5de2a9b66113955c5e6da9a": "1f3a678dd6ea08a9012de7d13e1ad6ca",
".git/objects/75/150cb76e35fa6220740588609f1f25a81fde47": "f19a34054825739d40af39df9d4f642e",
".git/objects/76/2ad7635f13323ca18f6f5383b52c97dd94be25": "bf65df14fe9ec99cd1009598876e4807",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/fb44312bcd1bba67f9e2f952993070b94ffb1f": "e3dd5f2198b29fc5fa3ccca5ac14feca",
".git/objects/78/f847c31186fbe7ba67eacaeaf066af3a746275": "7845bd43ea88c525b3b2e4f0db5838f4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c6e98dab94fc40a18f8bc9a0ddb09fc2f40ece": "76f7af9afc8fbde185edbdd20bd1481f",
".git/objects/7b/08a75a655c7845473ac5e4ddd632bf80af1df6": "f21ddf26119eec0de69cc9cbac11d24a",
".git/objects/7b/6677ef54258411dd9ab1a98bf6e81290d1e02f": "2ba2116a20e3d01c7660b0a6cb8f55a3",
".git/objects/7e/904cf5b6760a62eb8cbc31dffcdd16af20eb24": "b07d5552ae3a390b0482b25e7545db75",
".git/objects/80/bbf72cccb6b5e7552e45b62d9def22d993e933": "2068813508992bc408f1639189d42d83",
".git/objects/81/1022cda4948a344b003251e12f2e1ada8b335b": "8922f525a0ae2647dfefb3a854699333",
".git/objects/81/c5d0f890e23c693c5bbc829e1242f72a9e2b40": "5176290ee491bc3dd888d79b47274cb9",
".git/objects/82/022256780ac70208fc6e4213f190bb10a332bf": "c08ab04e8d5bc81782e1a4323573c9a9",
".git/objects/82/8cc7416b2a4bd46bb690fbb11e71045baa743c": "840c27081f212aaffbfe9ec2cd37efe2",
".git/objects/85/04d2fefc14418854fe37cfab519e7fcddb1724": "ae96d83f64ba7acb02e21f4c716e2c18",
".git/objects/85/08ee7145a512bd34156ae62d3c0ebd2772fdf1": "908c5528258c1c8d6ac2022cb87899fb",
".git/objects/88/60d80d92eee77cbf1085eec9a2d9d533b6992c": "5d9c0ba508a76c1cb40f8b1115bbb9fb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/86b0d5ba86b6a8336bccac432ced43fd791a8b": "67dfd042342169f364b53133523c1b32",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bb6269a78bd141279387c3e9b1ef4f98d76bd6": "3f59f712a4330482534db652dce7f7ca",
".git/objects/8c/168806d8818ed927d6393a4fc8177579c3cafc": "088bc7359d2d34b0df0b7e47c6e59f75",
".git/objects/8c/c2827e3f577f06c64e51a81d1351d07ececba1": "5344d7baf9ed3424510dd6cfc4ccd91b",
".git/objects/8f/dbb7d1a6a1d32b8189ff808f9d29ac660c6d95": "47fca7d8475d56cc8f229dd7ecd2ff76",
".git/objects/90/9907e9c312bb928d013e3dcc7b6fee9429245b": "8abc0caea939cf4e11bde70c9f168983",
".git/objects/91/d6a4d17f3055e6edfac8454f6878ef9ad35840": "2a4b9a2a9bc66c3961f7e53f54642918",
".git/objects/92/20e2c45742ad1e8c3b31b5ab375f108a7b1f66": "85e1a73ae5c4bd148a82ea0550699b02",
".git/objects/98/1a55052a36b3914e390cc9d2e1c6d8b59809f1": "b1176d56793bcc3bbf69085f15fed87b",
".git/objects/98/9ed020e4026b9bd1f1a7395d1cf5f04ae8e7cb": "678aee5fbc7ea88414403085e633d430",
".git/objects/9a/77f3a750d0f0027faa787bc3976ef298caaf66": "d599612f45d27487bf8aa214101fe308",
".git/objects/9e/489b7d012ae05853cb294f1ca8e0dbd5764d79": "5923e62540fba64aabf57e7f909fb3b9",
".git/objects/9e/af056f6d09f228d58115efd9f81d978b2f1ac9": "1d7b5bd2469499b1cac375e9e5397058",
".git/objects/9e/d03ea4f5b591992e613aa75a51aa984a2ca4ca": "398d4222aab172d52890a48c86e6aa02",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/5cad809a46b8a2e4352062b31de95597b3256c": "517affe2e3ba27ffc101c61f9556f55f",
".git/objects/a7/26b3db08c26748e2b8b2da4b52c7dc715c4f5d": "9219e471cb5ea041032b951a421480ad",
".git/objects/a7/d4d6a88abae4f0a21d16172883c31ba04daaac": "1b6d7a09ae6765e27f3d8ff880784f8d",
".git/objects/a8/c02efb9494233aa4ecdeee87f1337902085314": "61329bb9eeb9df9d5c5199c1f633e844",
".git/objects/aa/680f29734c82f0c28cdd2383413471e3f48684": "6f91617b1c1bd294a8409dede951cdb7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/a304c483cecc0f7d821f4c64caeadc2c4186d5": "a98beb83e1331bacafc396ce9ca65a70",
".git/objects/af/51e3466343cfc856a4fdd1aca4afa027028d4a": "a2b309382e7e72550a3f261e66e5f208",
".git/objects/b2/c9e481dbfe28c2e2be0ecaccdb713323e542f8": "4d96ea21ca75fef0e33e924485cda279",
".git/objects/b5/121531e6eecdbcaff9e99a5172f8e27a8b499d": "488b5dbfd2a7be2208b0d759df5f4df7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/228d2e65b0243e158733aaaa1422ba45464609": "6176f227fe1812e72abcc29d3ad25de5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4e84e7869a616a829b57a848750be3cb3e6d44": "daa94d4acac16a237a3431f4a2ab70e1",
".git/objects/ba/6fdd1e546108ac9c2c748de624e77ce35589e1": "df4f6c0c3aab5157f523ed43cce59a89",
".git/objects/bb/c8ff1b7ba9e1d6b3a07a7888c2b3995972cbb7": "30fc9a6a9db480c4e26a1cb94b019574",
".git/objects/bd/fa5614652933452c0cb2ec6af371c84e6898d7": "8caa3823480f609070ddd251d9478bde",
".git/objects/be/969973b51ed16a52f79a8c40dff698e00504b9": "95ccd51400e43ac0820327389e023412",
".git/objects/bf/3b4ff4c1b916e40ea18d34ac1ac1d5b7b9a663": "9aedd9c9aa40d6a8a41a294a35bf70d7",
".git/objects/bf/be4ef698696f30cf20c1f5c09a6a792e8a941f": "f91b130581c303b3f3ea292cbb3bafec",
".git/objects/c1/b61f7a7b1522940223763869517c82ff9436ad": "1c9b4f7880bbf81aaf27681ec2050f02",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/0c10973d29d756c3bc80a0225c8ca50dc96e00": "adefff89fda1e04f8d8cdf0c06d2898b",
".git/objects/c4/d30d046e2c163c4697d13aeee5a080b87eabb5": "c6282f7765a69dc0c5185315526b1b2e",
".git/objects/c5/f50b45edfc2f367dde5bf2ef9ead5fc9ddc20e": "3dc897ad3f2b7800491b6b338d5346be",
".git/objects/c6/c9dabbee6365178f3ebfc0af6198d4354474f8": "0648c82bacab84c329fffb3ef93abe70",
".git/objects/c7/9c21c4d37670f409d7fd0d8f1fc28e322cf0f7": "fd7a8ce9001a4fcceeb7d1133d4c4e85",
".git/objects/c7/f614b441901560218c04130e10918fc4dbb81d": "0708e0bf84fbcb52e49a64e8ddfd1c4e",
".git/objects/c8/16bf6484be8fdf2a184a857815f9f5b73dc239": "7ed07868c12d14de81e826a0a42df6d2",
".git/objects/c9/3df738fa84bc1fcdd80915089383aa2c364c93": "5357dca7ea6db291e8ccb84e53a00e29",
".git/objects/cc/72361cb6a1a5a190badc809b2e442474f266e3": "3ab8b72460df777aacd8a5b1a72a465b",
".git/objects/ce/3e06ae522aa6bc5c00209adb076bf9a1970d26": "7dd5a9b3daab0c71bf02b4fe6c2da64f",
".git/objects/d1/bdecb58d43eef350a0cf69431e68e6ad7655e7": "7b1045472877c7385e82fe917c8bf7bc",
".git/objects/d2/75e90e439bbd923872def785dd7c0414e3e8a0": "34853b82388366e71851fecaefb5e03f",
".git/objects/d3/609a50e60f261e6be9c3cd114ba22dcb5a7f9f": "7fa412a51f32efb0ef4abc6343192593",
".git/objects/d3/bd67fc9eb696c3711b91db69583698c8aba9b9": "7d7c8c6dd289936c937c94629a1be61d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c5546d4e787f17b6a55df26f63e2126c12a211": "2228f7672abe01f0af152b8df0bdaf90",
".git/objects/d7/ce67b327d9cf35e3766b7226ee430a50afcad7": "7f95029e93420a18c6c5975a5b946f83",
".git/objects/d8/b02c5df23d35b441e031970b057f2eb770dca0": "dabfb8b465e755d3d2b8677e9f7744e1",
".git/objects/db/777601723547e1a64d57391e85dec9402a1bfe": "9be6da3621a42f3e9cc012648187406c",
".git/objects/db/949bc2535cfffc389beb17f359faefb603fcd3": "193f765d52bd5c11dc442595913b0e03",
".git/objects/dd/f5f8ec169b7e84b16176523546125db73394f0": "6d28c30698b9df493f912fa3f198256f",
".git/objects/de/23be8a69f04b75454c1abb0d9f105ea9798444": "f0936d3d3d15e96e3c493299c96592e9",
".git/objects/df/d8513da41fa460a9e2200edc075599e06baa2f": "feae33f6fa6fec231aa21b4f13cb9749",
".git/objects/df/e0149f7f75a05d5e3210eb24e198cdbfbd780b": "f47ca48ec32ba4c990cee6d88b35aaa7",
".git/objects/e0/88fb57528e3b0cef2c58994a8b61411b4fec5b": "1b97fb6a8fa3da5ed2956e940198f1ba",
".git/objects/e1/46db4853e4a6db6f9fa812b8b044ea35010c14": "549f2ad1d0b1400bae02a501472bbbcc",
".git/objects/e1/58a3d4e6884d3c3a3c6695b929854c0b8f33d6": "840b69aeff840720931715ffa917bbaf",
".git/objects/e1/cafda7cf33ab141254e781d05c599c5c0bb57a": "2649828209a76235524104a473e15084",
".git/objects/e1/ce5e2c92c7ef24644b34d544bfd0f01ddab970": "9ed877bb385447a850b7e8d4c8cda035",
".git/objects/e3/aba5ba5c0f1ecd30fae09ce2aeff4c6fd50e9b": "904eb94401d494bd23873b5067a8f074",
".git/objects/e4/e3f628b3f275f12d6fa29356dbef7f5bbe2363": "81a29fc7b3081e5c87a4fdbc81c301a1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/89ab926e7a781b2a382de134f5e7ce100166cc": "a393e0369fb399a89f4cd7849ed58e83",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7bf893cc2d3afb93261424cd989bce50f26042": "cadea78d2ac37d2bba81bbdcdfdc09b4",
".git/objects/ec/a8976c4d77f8ddadad49f55ce2fd8c4b00d29c": "cddfcf2fa1236fb940d4cc2bbf58b683",
".git/objects/f3/2885f3afd8d2c1012a35e271ccd6a74614394c": "d838e53a697f17f673bd3ce30c8bafe4",
".git/objects/f3/52dcc30dea17069ca11baea9bb13df6834d04f": "10a6319144cdb9b14b2de62a5edc5c2a",
".git/objects/f3/6d92413c7b99e35762bb3486f8dd7a29b70ff0": "c192aae7ea6022cb5854c21503070699",
".git/objects/f5/c9170b6ef9993766cbfebb216cb8a0d0ffd53a": "78f44605d5e6ed5007021beade764534",
".git/objects/f6/7c1ffd61a061ba9d97fc05a3c1f18bff79221a": "dd7d79e2a6cf691db097354037442660",
".git/objects/f7/359b8dcdb8a6195f55e3128c4f40b0b382687f": "f39fa4c8d2725d0f9e27736e5ddfa1a1",
".git/objects/f8/1c05b0d9e82b01b0b33fe39e29feeda4da75a3": "a7e6fe3761aaf7346f2f4a9a49414a99",
".git/objects/f8/9d8a42a10b1ddeafc85da45d63b65d3d88eed3": "cbc92a4db6309086b7f78796c2619663",
".git/objects/fa/dbe5eab37a535bc59a359169b78c2ddbb7dd1a": "62ee8024243caf627a1b190717a6409d",
".git/objects/fd/65e74b0c2a3fd0eab6a6f6bedb7dce7ea98db0": "7f56c05e7f304678b7981d44339326f4",
".git/objects/fd/90e436c2782411786781a137a68ffdd8dac09f": "f90e0800668efdc51378aed30c015003",
".git/objects/fd/bc23b2371f9b2949f8fa7bee64729358803d2d": "a0a6ec3138e655e8bbcd40ed1dd5dea5",
".git/objects/fd/d19204fc24b09050c34497fe6b3fc2d7c73281": "70c069b620e0862249f4ddf6a3824539",
".git/objects/pack/pack-7d519c46aa18585f6fd02ba3c7a843a97aeb83ff.idx": "a99011035a37b053ed16dd4940c4d7ad",
".git/objects/pack/pack-7d519c46aa18585f6fd02ba3c7a843a97aeb83ff.pack": "2c18241ec555c6213131bc65c2101092",
".git/ORIG_HEAD": "999abbb8e6925c09416459c85a8b7ab3",
".git/packed-refs": "400a1239296c11b2d45d29ce9f1e45e3",
".git/refs/heads/main": "999abbb8e6925c09416459c85a8b7ab3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "999abbb8e6925c09416459c85a8b7ab3",
"assets/AssetManifest.json": "7b219259757800c02a8d2befb07a9e18",
"assets/assets/images/ab_crunches.webp": "33a9a6b057eff61fd52153dc02e7eb20",
"assets/assets/images/ab_crunchs.jpg": "e278e1d8c36ad9ab78a6b83530f36832",
"assets/assets/images/adho_mukha_shvanasana.jpg": "da8b345be54a99d56392eb1d93c1529b",
"assets/assets/images/adho_mukha_svana_asana.jpg": "fba1962447ad984d6cce985a91054f4e",
"assets/assets/images/anjaney_asana.jpg": "a6d4388c3e0574af08adc6b92572da70",
"assets/assets/images/ardha_matsyendra_asana.webp": "4710c2a9dea8fe4e74941e810215caf6",
"assets/assets/images/arm_raise_situps.webp": "02393c302607da76f909a89cc2fefecf",
"assets/assets/images/ashtanga_namaskara.jpg": "9ec0c6a5f96febd2640765f41cd01990",
"assets/assets/images/ashtanga_namaskara1.jpg": "b6427c548e4c84c4e568da3653909f85",
"assets/assets/images/ashwa_sanchalana_asana.jpg": "a2b8fd83186b29e90d70ed3f8b477564",
"assets/assets/images/bear_hug.jpg": "be6148f7e28f8d3aeec903a35299db1e",
"assets/assets/images/bhujanga_asana.jpg": "92ea6db50b55b3519a5cc858305582d1",
"assets/assets/images/bodyweight_squat.jpg": "75485436d0b7fce8352e2c77517788db",
"assets/assets/images/burpees.webp": "3168328f669956a0426c80d71dfef63b",
"assets/assets/images/butterfly_asana.jpg": "e9fb358285dbd19174cef077fa092e2e",
"assets/assets/images/chair_dips.webp": "6cc7f1180d3c163e63701d7129bc438a",
"assets/assets/images/chakra_asana.png": "420a1e885d9f2aee91df6664c838fb25",
"assets/assets/images/child_pose.png": "da1c9c4790fe47448bd0a01c9c48efe8",
"assets/assets/images/danda_asana.jpg": "36b77191ac9aba078b729139b7637d01",
"assets/assets/images/exercise_abcrunch.xml": "df285ab5cf397528a593671b4ab41ca8",
"assets/assets/images/exercise_highknees.xml": "513d2b149a640e5b53a5f2cffa0b7b19",
"assets/assets/images/exercise_jumpingjacks.xml": "63ea6cbfdf4f779092d246b5cdd56479",
"assets/assets/images/exercise_lunge.xml": "965ba7005ee1cde573fb05ec25c47872",
"assets/assets/images/exercise_plank.xml": "e54e699ad25769eb891d25bcd7323207",
"assets/assets/images/exercise_pushup.xml": "5f290a718e4ada16934fd446c15fdfcb",
"assets/assets/images/exercise_pushuprotation.xml": "ccf207167a753b48c92a0342ff9902bf",
"assets/assets/images/exercise_sideplank.xml": "c9fe5d536b549110f860fc9d9cb1f2aa",
"assets/assets/images/exercise_squat.xml": "2907efd86d8656bcc5998991658d34e8",
"assets/assets/images/exercise_stepup.xml": "2449207b4b430e9534fbb5c70c16d0c5",
"assets/assets/images/exercise_tricepsdip.xml": "7418dfe0db61a708729ccb75f94b0a43",
"assets/assets/images/exercise_wallsit.xml": "bda65e0f2765e31395354593e0fca499",
"assets/assets/images/garuda_asana.jpg": "e154cc541e8ac7fcb277463a13d8d728",
"assets/assets/images/hala_asana.jpg": "93ecddf54686379bf2d2f6e7b87787da",
"assets/assets/images/hastapada_asana.jpg": "f1f02c1a08916df8e48a1fd80f58e8f0",
"assets/assets/images/hastauttana_asana.jpg": "f1d9e16cbf23366861ff7ec60942f0c9",
"assets/assets/images/hasta_uttana_asana.jpg": "eae398c53e434a59ee939f1116386b5d",
"assets/assets/images/high_jumps.webp": "d4646236a083694be1460197da57ffe5",
"assets/assets/images/high_kicks.webp": "ca6cd93a95c71cf2b54c835209a620f7",
"assets/assets/images/high_knees.gif": "1ca6ff674a9f0ddea8b467e908e70fe8",
"assets/assets/images/hip_thrust.jpg": "3b5f4dc7dd0ae825d397a91dff2315fc",
"assets/assets/images/incline_push_up.jpg": "04dd6931f078932f25b1756a4110f14a",
"assets/assets/images/jumping_jacks.gif": "73aded119d1356b1206d0a34a5a79b67",
"assets/assets/images/kneeling_lat_stretch.jpg": "f87380308d30492d30bc6b2b53b1c6a4",
"assets/assets/images/knee_to_chest.gif": "8bac5f51ed4c7078d05259f078c94728",
"assets/assets/images/legs_up_the_wall_pose.png": "4c90cf02cf67f855e753ee013c0bfd94",
"assets/assets/images/lower_back_twist.jpg": "036fa09a2501d6b852aa0e401b210645",
"assets/assets/images/low_lunge.png": "6bba07689b72b2d99e81ef31301c708d",
"assets/assets/images/naga_asana.jpg": "6ad2eaa672a28e0a123b0440d48a8eca",
"assets/assets/images/neck_stretch.jpg": "cf35d9278f2782109afb523a1051341b",
"assets/assets/images/pascimottana_asana.png": "e6cc1f655cecd1d1a730b0027849e2aa",
"assets/assets/images/pranama_asana.jpg": "afac3c2bed04078c2f6860b5bb523fb4",
"assets/assets/images/pranam_asana.jpg": "2ffafd1ffa1177b7806ab7ee6e756da4",
"assets/assets/images/push_ups.webp": "fa63c2ec0ff2fd9424368e929473a86a",
"assets/assets/images/reclining_bound_angle_pose.jpg": "7b0b24c59532112f0fb676773d439538",
"assets/assets/images/rotate_head.jpg": "8eb7ab3ef0d56debaeb8994772357528",
"assets/assets/images/rotate_shoulders.jpg": "d493e43a9aca68d6a10b1c43dfc7c897",
"assets/assets/images/rotate_wrist.jpg": "d5a668198180c605dca4eceef1135515",
"assets/assets/images/seated_forward_bend.jpg": "f43b2933c39c30b99b7c25e295340571",
"assets/assets/images/sleep_time_stretches.jpg": "6e3eff3f81a68781988ae14e0787e1d6",
"assets/assets/images/thigh_strecth.gif": "aa8bd83d1c98fb1004eae6090fb5026a",
"assets/assets/images/urdhva_mukha_shvanasana.jpg": "93c8aaca4380e7e48417d545559a82b5",
"assets/assets/images/uttana_asana.jpg": "32b9f463c6a9e10402a3ed94b820f4fa",
"assets/assets/images/walking_lunges.png": "02509bce45e6ba7c9fbbdf5b1f5b0226",
"assets/assets/workouts.json": "9df55785872a67a94b7fbc855fb8caa1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8a315f99ed58a67c133b810b6af13c1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b9be4ebb07264e4b459f00ba9b858940",
"/": "b9be4ebb07264e4b459f00ba9b858940",
"main.dart.js": "e8fe749a49da4c9e17dc08724382d9ea",
"manifest.json": "5d5f4635ec993d8cf9c2ab30a7daa959",
"version.json": "7194fe0c8f13037a5afc46a6e8eb8b14"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
