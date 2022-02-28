import { atom } from 'recoil'
import { StoreKeyEnum } from './StoreKeyEnum'

const showLoading = atom<boolean>({
  key: StoreKeyEnum.showLoading,
  default: false,
})

const loadingTxHash = atom<string>({
  key: StoreKeyEnum.loadingTxHash,
  default: '',
})

const loadingTitle = atom<string>({
  key: StoreKeyEnum.loadingTitle,
  default: '',
})

export default {
  showLoading,
  loadingTxHash,
  loadingTitle,
}
